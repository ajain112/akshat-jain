import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Navbar.css";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const location = useLocation();

  // Elevation on scroll for subtle shadow
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close mobile menu on hash change (e.g., when going to /#contact)
  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Utility to close menu on click
  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`nav ${elevated ? "nav--elevated" : ""}`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="nav__inner">
        {/* Brand / Logo */}
        <Link to="/" className="nav__brand" aria-label="Go to home" onClick={closeMenu}>
          Akshat Jain
        </Link>

        {/* Desktop links */}
        <ul className="nav__links" role="menubar">
          <li role="none">
            <Link role="menuitem" className="nav__link" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li role="none">
            <Link role="menuitem" className="nav__link" to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li role="none">
            <Link role="menuitem" className="nav__link" to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>

          {/* Contact is a section on Home; keep as anchor to /#contact */}
          <li role="none">
            <a
              role="menuitem"
              className="nav__link"
              href="/#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`nav__mobile ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <ul className="nav__mobile-list">
          <li>
            <Link className="nav__mobile-link" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__mobile-link" to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav__mobile-link" to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <a className="nav__mobile-link" href="/#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
