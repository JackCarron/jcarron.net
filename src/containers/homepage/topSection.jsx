import React from 'react';
import { Navbar } from '../../components/navbar';
import ProfessionalImg from '../../assets/illustrations/Professional.png';

export function TopSection() {
  return (
    <section className="hero" id="top">
      <Navbar />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            Software engineer · Cloud systems · Product delivery
          </p>
          <h1>
            I build dependable software for <em>complex systems.</em>
          </h1>
          <p className="hero-summary">
            I’m Jack Carron, a software engineer with experience at Amazon Web
            Services and Deloitte. I turn ambiguous problems into secure,
            maintainable products across the cloud and full stack.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore my experience
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-accent" aria-hidden="true" />
          <img className="portrait" src={ProfessionalImg} alt="Jack Carron" />
          <div className="portrait-caption">
            <span className="status-dot" aria-hidden="true" />
            Building thoughtful, durable systems
          </div>
        </div>
      </div>
      <div className="credentials" aria-label="Career highlights">
        <div>
          <strong>AWS</strong>
          <span>Cloud product engineering</span>
        </div>
        <div>
          <strong>Deloitte</strong>
          <span>Enterprise delivery</span>
        </div>
        <div>
          <strong>Full stack</strong>
          <span>Infrastructure to interface</span>
        </div>
      </div>
    </section>
  );
}
