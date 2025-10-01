import React from "react";
import "./css/Hero.css";
import heroImg from "../assets/hero.png"; // <-- replace with your image path
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        {/* Left: copy */}
        <div className="hero__text">
          <p className="hero__kicker">Welcome, My name is</p>
          <h1 className="hero__title">Akshat Jain</h1>
          <p className="hero__subtitle">Designing Experiences · Building with Code</p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary" aria-label="Contact Me">
              Contact Me
            </a>
            <Link to="https://drive.google.com/file/d/1BHzg7n3VV22EifwRFiooresBTDzq4jw0/view?usp=drive_link" target="none" className="btn btn--ghost" aria-label="Know More">
              Download Resume
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="hero__imageWrap" aria-hidden="true">
          <img src={heroImg} className="hero__image" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
