import React from 'react';
import './servicesSection.css';

const capabilities = [
  {
    number: 'A',
    title: 'Systems thinking',
    description:
      'Understanding the service boundaries, infrastructure, interfaces, and people around the code.',
  },
  {
    number: 'B',
    title: 'End-to-end ownership',
    description:
      'Carrying work from an ambiguous problem through implementation, launch, and operation.',
  },
  {
    number: 'C',
    title: 'Practical judgment',
    description:
      'Choosing maintainable solutions, explaining tradeoffs, and keeping unnecessary complexity out.',
  },
];

export function ServicesSection() {
  return (
    <main>
      <section
        className="section experience-section page-shell"
        id="experience"
      >
        <div className="section-heading">
          <p className="section-index">01 / Experience</p>
          <h2>
            Cloud and AI Engineering for{' '}
            <em>clean, thoughtful, reliable products</em>
          </h2>
          <p>
            My background spans cloud-native product development and enterprise
            consulting. I’m comfortable moving between product requirements,
            implementation details, and the operational reality of a system.
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <span className="experience-index">01</span>
            <div className="experience-meta">
              <p className="company">Amazon Web Services</p>
              <p>Software Development Engineer</p>
            </div>
            <div className="experience-detail">
              <h3>Marketing automation platforms</h3>
              <p>
                Built and operated software supporting marketing automation,
                bringing cloud engineering and product thinking to complex
                internal workflows.
              </p>
              <div className="tag-list" aria-label="AWS focus areas">
                <span>AWS</span>
                <span>Distributed systems</span>
                <span>Automation</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <span className="experience-index">02</span>
            <div className="experience-meta">
              <p className="company">Deloitte Consulting</p>
              <p>Software Engineering Consultant</p>
            </div>
            <div className="experience-detail">
              <h3>Enterprise product delivery</h3>
              <p>
                Delivered Salesforce and React solutions for enterprise teams,
                translating business requirements into maintainable software.
              </p>
              <div className="tag-list" aria-label="Deloitte focus areas">
                <span>React</span>
                <span>Salesforce</span>
                <span>Consulting</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="page-shell">
          <div className="approach-heading">
            <p className="section-index">02 / Approach</p>
            <h2>How I approach the work.</h2>
            <p>
              Clear communication, considered tradeoffs, and software that is
              understandable to the next person who works on it.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span className="capability-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
          <div className="certification-row">
            <span>Credentials /</span>
            <p>AWS Certified Cloud Practitioner</p>
            <p>Salesforce Platform Developer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
