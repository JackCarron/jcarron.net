import React, { useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={menuOpen ? 'site-header menu-open' : 'site-header'}>
      <a className="wordmark" href="#top" aria-label="Jack Carron, home">
        jack carron
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <nav
        className={menuOpen ? 'site-nav is-open' : 'site-nav'}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <a href="#experience" onClick={closeMenu}>
          01 Experience
        </a>
        <a href="#expertise" onClick={closeMenu}>
          02 Approach
        </a>
        <a href="#contact" onClick={closeMenu}>
          03 Contact
        </a>
        <a
          className="mobile-linkedin"
          href="https://www.linkedin.com/in/hijackcarron/"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          LinkedIn ↗
        </a>
      </nav>
      <a
        className="nav-linkedin"
        href="https://www.linkedin.com/in/hijackcarron/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </header>
  );
}
