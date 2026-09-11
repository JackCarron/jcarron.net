import React from 'react';
import './servicesSection.css';

const capabilities = [
  {
    number: '01',
    title: 'Cloud systems',
    description:
      'Designing services and automation with reliability, security, observability, and operational ownership in mind.',
  },
  {
    number: '02',
    title: 'Product engineering',
    description:
      'Connecting backend architecture to clear user experiences and shipping useful increments across the full stack.',
  },
  {
    number: '03',
    title: 'Technical judgment',
    description:
      'Working through ambiguity, making pragmatic tradeoffs, and leaving systems simpler and easier to operate.',
  },
];

export function ServicesSection() {
  return (
    <main>
      <section className="section page-shell" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Engineering where product, platform, and operations meet.</h2>
          <p>
            My background spans cloud-native product development and enterprise
            consulting, with an emphasis on taking ownership beyond the code.
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
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
            <div className="experience-meta">
              <p className="company">Deloitte Consulting</p>
              <p>Software Engineering Consultant</p>
            </div>
            <div className="experience-detail">
              <h3>Enterprise software delivery</h3>
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
          <div className="section-heading section-heading-light">
            <p className="eyebrow">How I work</p>
            <h2>Broad enough to see the system. Focused enough to ship.</h2>
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
            <span>Credentials</span>
            <p>AWS Certified Cloud Practitioner</p>
            <p>Salesforce Platform Developer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
