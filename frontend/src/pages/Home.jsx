import React from "react";

import AboutTeaser from "../components/AboutTeaser";
import Skills from "../components/Skills.jsx";
import Contact from "../components/ContactForm.jsx";
import HeroSequence from "./HeroSequence.jsx";

export default function Home() {
  return (
    <>
      <HeroSequence />
      <AboutTeaser />
      <Skills />
      <Contact />
    </>
  );
}