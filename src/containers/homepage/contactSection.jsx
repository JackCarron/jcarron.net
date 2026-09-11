import React, { useEffect, useRef, useState } from 'react';
import { CONTACT_API_URL, TURNSTILE_SITE_KEY } from '../../contactConfig';
import './contactSection.css';

function TurnstileWidget({ onTokenChange, resetKey, siteKey }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!siteKey) {
      return undefined;
    }

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        action: 'contact',
        theme: 'light',
        callback: onTokenChange,
        'expired-callback': () => onTokenChange(''),
        'error-callback': () => onTokenChange(''),
      });
    };

    const existingScript = document.querySelector(
      'script[data-turnstile-script]'
    );

    if (window.turnstile) {
      renderWidget();
    } else if (existingScript) {
      existingScript.addEventListener('load', renderWidget, { once: true });
    } else {
      const script = document.createElement('script');
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.dataset.turnstileScript = 'true';
      script.addEventListener('load', renderWidget, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.removeEventListener('load', renderWidget);
      }
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [onTokenChange, resetKey, siteKey]);

  if (!siteKey) return null;

  return <div className="turnstile-widget" ref={containerRef} />;
}

const initialFields = {
  emailAddress: '',
  subject: '',
  message: '',
  website: '',
};

export function ContactSection() {
  const [fields, setFields] = useState(initialFields);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [resetKey, setResetKey] = useState(0);
  const startedAt = useRef(Date.now());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
  };

  const handleTokenChange = React.useCallback((token) => {
    setTurnstileToken(token);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!turnstileToken || status === 'submitting') {
      setStatusMessage('Please complete the security check before sending.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emailAddress: fields.emailAddress.trim(),
          subject: fields.subject.trim(),
          message: fields.message.trim(),
          website: fields.website,
          formElapsedMs: Date.now() - startedAt.current,
          turnstileToken,
        }),
      });

      if (!response.ok) throw new Error('Message request failed');

      setFields(initialFields);
      setTurnstileToken('');
      setResetKey((current) => current + 1);
      startedAt.current = Date.now();
      setStatus('success');
      setStatusMessage('Thanks — your message has been sent.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        'Your message could not be sent. Please try again or reach out on LinkedIn.'
      );
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="page-shell contact-layout">
        <div className="contact-intro">
          <p className="section-index">03 / Contact</p>
          <h2>Let’s talk.</h2>
          <p>
            If you have a project, role, or interesting engineering problem in
            mind, send me a note.
          </p>
          <a
            href="https://www.linkedin.com/in/hijackcarron/"
            target="_blank"
            rel="noreferrer"
          >
            Or find me on LinkedIn ↗
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="form-heading">Send a note</p>
          <div className="field-row">
            <label htmlFor="emailAddress">Email address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              maxLength="254"
              required
              placeholder="you@example.com"
              value={fields.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div className="field-row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              minLength="3"
              maxLength="120"
              required
              placeholder="What are you working on?"
              value={fields.subject}
              onChange={handleChange}
            />
          </div>
          <div className="field-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              minLength="20"
              maxLength="5000"
              required
              placeholder="A few details about the problem, team, or idea…"
              value={fields.message}
              onChange={handleChange}
            />
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              value={fields.website}
              onChange={handleChange}
            />
          </div>
          <TurnstileWidget
            onTokenChange={handleTokenChange}
            resetKey={resetKey}
            siteKey={TURNSTILE_SITE_KEY}
          />
          <div className="form-actions">
            <button
              className="button button-primary"
              type="submit"
              disabled={!turnstileToken || status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
            <p
              className={
                status === 'error' ? 'form-status error' : 'form-status'
              }
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
