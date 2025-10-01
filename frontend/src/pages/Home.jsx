import React from "react";
import Hero from "../components/Hero";
import AboutTeaser from "../components/AboutTeaser";
import Skills from "../components/Skills.jsx";
import Contact from "../components/ContactForm.jsx";

export default function Home() {
  return (
    <>
      {/* Sections for the homepage */}
      <Hero />
      <AboutTeaser />
      <Skills />
      <Contact />
    </>
  );
}
