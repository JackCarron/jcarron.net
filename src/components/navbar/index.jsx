import React from 'react';

export function Navbar() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Jack Carron, home">
        Jack Carron<span>.</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#experience">Experience</a>
        <a href="#expertise">Expertise</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        className="nav-linkedin"
        href="https://www.linkedin.com/in/hijackcarron/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
