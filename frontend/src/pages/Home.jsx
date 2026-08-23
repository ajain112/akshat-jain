import React from "react";

import AboutTeaser from "../components/AboutTeaser";
import Skills from "../components/Skills.jsx";
import Contact from "../components/ContactForm.jsx";
import HeroSequence from "./HeroSequence.jsx";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Akshat Jain | Product Designer, Product Manager & Design Engineer"
        description="Akshat Jain works across product design, product management, design engineering, UX engineering, AI products, and growth. Explore his work, experience, and product thinking."
        canonical="https://ajain.live/"
      />

      <HeroSequence />
      <AboutTeaser />
      <Skills />
      <Contact />
    </>
  );
}