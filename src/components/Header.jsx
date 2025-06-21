import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '@fontsource/poppins';
import '../styles/global.css';
import '../styles/components.css';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/janiotech' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/j%C3%A2nio-matos-aa57461b8/' },
  { icon: <FaTwitter />, href: 'https://twitter.com/' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">JÂNIO</div>
        <nav className="header__nav-wrapper">
          <ul className={`header__nav${menuOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="header__nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__social">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="header__icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div
          className="header__menu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span className="header__menu-bar" style={{ transform: menuOpen ? 'rotate(45deg) translateY(1px)' : '' }} />
          <span className="header__menu-bar" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="header__menu-bar" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-2px)' : '' }} />
        </div>
      </div>
    </header>
  );
}

