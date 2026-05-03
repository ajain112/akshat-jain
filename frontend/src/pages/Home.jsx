import React from "react";

import AboutTeaser from "../components/AboutTeaser";
import Skills from "../components/Skills.jsx";
import Contact from "../components/ContactForm.jsx";
import HeroSequence from "./HeroSequence.jsx";

export default function Home() {
  return (
    <>
      {/* Sections for the homepage */}
      <HeroSequence />
      <AboutTeaser />
      <Skills />
      <Contact />
    </>
  );
}
