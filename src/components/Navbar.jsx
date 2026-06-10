import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Cerrar el menú con la tecla Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" aria-label="Blue Sky Group Home">
          <span className="navbar__logo-text">Blue Sky Group</span>
        </a>

        {/* Desktop navigation */}
        <ul className="navbar__links">
          <li>
            <a href="#que-es" className="navbar__link">
              Qué es
            </a>
          </li>

          <li className="navbar__dropdown-wrapper">
            <span className="navbar__link navbar__link--has-dropdown">Servicios</span>
            <div className="navbar__dropdown">
              <a href="#blue-sky-prospect" className="navbar__dropdown-link">
                Blue Sky Prospect
              </a>
              <a href="#blue-sky-commerce" className="navbar__dropdown-link">
                Blue Sky Commerce
              </a>
            </div>
          </li>

          <li>
            <a href="#contacto" className="navbar__link">
              Contacto
            </a>
          </li>
        </ul>

        <a href="#contacto" className="navbar__cta navbar__cta-desktop">
          Coordinar reunión <span className="navbar__cta-arrow">→</span>
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          id="navbar-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu overlay — composición header / cuerpo / footer */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-menu__header container">
          <span className="mobile-menu__brand">Blue Sky Group</span>
          <button
            className="mobile-menu__close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__body container" aria-label="Navegación principal">
          <a href="#que-es" className="mobile-menu__link" onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1}>
            <span className="mobile-menu__index">01</span>
            <span className="mobile-menu__label">Qué es</span>
          </a>

          <div className="mobile-menu__group">
            <span className="mobile-menu__link mobile-menu__link--group">
              <span className="mobile-menu__index">02</span>
              <span className="mobile-menu__label">Servicios</span>
            </span>
            <div className="mobile-menu__subitems">
              <a href="#blue-sky-prospect" className="mobile-menu__sublink" onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1}>
                <span className="mobile-menu__subname">Blue Sky Prospect</span>
                <span className="mobile-menu__subtag mobile-menu__subtag--active">Servicio activo</span>
              </a>
              <a href="#blue-sky-commerce" className="mobile-menu__sublink" onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1}>
                <span className="mobile-menu__subname">Blue Sky Commerce</span>
                <span className="mobile-menu__subtag">En desarrollo</span>
              </a>
            </div>
          </div>

          <a href="#contacto" className="mobile-menu__link" onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1}>
            <span className="mobile-menu__index">03</span>
            <span className="mobile-menu__label">Contacto</span>
          </a>
        </nav>

        <div className="mobile-menu__footer container">
          <a href="#contacto" className="mobile-menu__cta" onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1}>
            Coordinar reunión <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
