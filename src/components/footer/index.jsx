import React from 'react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-content">
        <a className="wordmark footer-wordmark" href="#top">
          Jack Carron<span>.</span>
        </a>
        <p>Software engineering, cloud systems, and thoughtful delivery.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/hijackcarron/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JackCarron"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
