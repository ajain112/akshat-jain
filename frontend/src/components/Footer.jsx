import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Brand / tagline */}
        <div className="footer__col">
          <h3 className="footer__brand">Akshat Jain</h3>
          <p className="footer__tag">
            Thinker <span aria-hidden="true">|</span> Dreamer{" "}
            <span aria-hidden="true">|</span> Hard Worker
          </p>
        </div>

        {/* Quick links */}
       <nav className="footer__col" aria-label="Footer quick links">
  <h4 className="footer__title">Quick Links</h4>
  <ul className="footer__links">
    {/* Home → scroll to hero */}
    <li>
      <Link to="/">Home</Link>
    </li>

    {/* About page */}
    <li>
      <Link to="/about">About Me</Link>
    </li>

    {/* Projects page */}
    <li>
      <Link to="/projects">Projects</Link>
    </li>

    {/* Contact → scroll to section on homepage */}
    <li>
      <Link to="/#contact">Contact Me</Link>
    </li>
  </ul>
</nav>

        {/* Social */}
        <div className="footer__col">
          <h4 className="footer__title">Connect With Me</h4>
          <ul className="footer__social" aria-label="Social links">
            <li>
              <a
                href="https://www.linkedin.com/in/ajain112/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ajain112"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/ajain112"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dribbble.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/ajain112"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/behance.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:ajain14142@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          Designed and Developed by Akshat Jain with loads of love to the vistor!! All rights reserved. © {YEAR}
        </p>
      </div>
    </footer>
  );
}
