import React from 'react';
import { Navbar } from '../../components/navbar';
import ProfessionalImg from '../../assets/illustrations/Professional.png';

export function TopSection() {
  return (
    <section className="hero" id="top">
      <Navbar />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <p className="hero-kicker">Software engineer — cloud &amp; product</p>
          <h1>
            Building reliable software for <em>complex systems.</em>
          </h1>
          <p className="hero-summary">
            I’m Jack Carron, a software engineer with experience at Amazon Web
            Services and Deloitte. I work across backend systems,
            infrastructure, and product interfaces.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View experience <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/JackCarron"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="portrait-column">
          <div className="portrait-wrap">
            <img className="portrait" src={ProfessionalImg} alt="Jack Carron" />
          </div>
          <p className="portrait-caption">
            <span className="status-dot" aria-hidden="true" />
            Available for thoughtful conversations
          </p>
        </div>
      </div>
      <div className="signal-strip" aria-label="Career highlights">
        <span>
          <strong>AWS</strong> Software Development Engineer
        </span>
        <span>
          <strong>Deloitte</strong> Engineering Consultant
        </span>
        <span>
          <strong>Focus</strong> Cloud and full-stack products
        </span>
      </div>
    </section>
  );
}
