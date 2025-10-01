import React from "react";
import { Link } from "react-router-dom";
import "./css/AboutPage.css";
import Edutimeline from "../components/Edutimeline.jsx";
import WorkExp from "../components/WorkExp.jsx";
import abthero from "../assets/about-hero.jpg";

export default function About() {
  return (
    <main className="aboutpg" aria-labelledby="aboutpg-title">
      <section className="aboutpg__hero">
        <div className="aboutpg__inner">
          {/* Image */}
          <figure className="aboutpg__media" aria-label="Portrait of Akshat Jain">
            <div className="aboutpg__card">
              {/* Replace the src below with your optimized WebP/JPEG */}
              <img
                src= {abthero}
                alt="Akshat Jain smiling, infront of temple"
                width="960"
                height="1200"
                loading="eager"
                decoding="async"
              />
            </div>
          </figure>

          {/* Text */}
          <div className="aboutpg__text">
            <h1 id="aboutpg-title" className="aboutpg__title">
              About <span className="accent">Me</span>
            </h1>

            <p className="aboutpg__lead">
              I’m Akshat Jain, a UX/UI designer and software developer who loves
              building useful, beautiful, and fast digital experiences. My work
              blends design thinking with solid engineering so ideas ship as
              polished products people actually enjoy using.
            </p>

            <ul className="aboutpg__badges" aria-label="Focus areas">
              <li>Product Thinking</li>
              <li>UX Mindset</li>
              <li>Code Builder</li>
            </ul>

            <div className="aboutpg__ctas">
              <Link className="btn btn--accent" to="/projects">View Projects</Link>
              {/* Use Link with hash to target the section on Home */}
              <Link
                className="btn btn--ghost"
                to={{ pathname: "/", hash: "#contact" }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    <Edutimeline />
    <WorkExp />
    </main>
    
  );
}
