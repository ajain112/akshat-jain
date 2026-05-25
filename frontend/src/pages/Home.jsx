import React from "react";

import AboutTeaser from "../components/AboutTeaser";
import Skills from "../components/Skills.jsx";
import Contact from "../components/ContactForm.jsx";
const HeroSequence = lazy(() => import("./HeroSequence.jsx"));

export default function Home() {
  return (
    <>
      {/* Sections for the homepage */}
      <Suspense fallback={<div className="hero-fallback">Akshat Jain</div>}>
        <HeroSequence />
      </Suspense>

      <AboutTeaser />
      <Skills />
      <Contact />
    </>
  );
}
