import { Link } from "react-router-dom";
import "./css/AboutTeaser.css";
import portrait from "../assets/about-photo.jpg"; // <-- update path to your image

export default function AboutTeaser() {
  return (
    <section id="about" className="about about--teaser">
      <div className="about__inner">
        {/* Left: text */}
        <div className="about__text">
          <h2 className="about__heading">
            About <span className="accent">Me</span>
          </h2>

          <p className="about__para">
            I am Akshat Jain, a UX/UI designer and software developer passionate about
            creating digital experiences that are intuitive, accessible, and visually
            engaging. My work combines creative problem-solving with a strong technical
            foundation to deliver products people love to use.
          </p>

          <div className="about__block">
            <h3>Vision</h3>
            <p>
              Design and develop products that make technology feel effortless and human—
              experiences that are functional and leave a lasting positive impact.
            </p>
          </div>

          <div className="about__block">
            <h3>Mission</h3>
            <p>
              Bring together research, design thinking, and clean, scalable code to build
              solutions that solve real problems and align with business goals.
            </p>
          </div>

          <div className="about__cta">
            <Link to="/about" className="btn btn--ghost" aria-label="Read full About page">
              Read full About →
            </Link>
          </div>
        </div>

        {/* Right: photo card */}
        <div className="about__media">
          <div className="about__card">
            <img src={portrait} alt="Akshat Jain" />
          </div>
        </div>
      </div>
    </section>
  );
}
