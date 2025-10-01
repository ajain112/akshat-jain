// src/components/EducationTimeline.jsx
import React from "react";
import Timeline from "./Timeline";


const education = [
  {
    id: "e1",
    period: "2019 – 2023",
    title: "B.Tech, Computer Science",
    org: "Shir Vaishnav Institute of Technology",
    location: "Indore, MP, India",
  },
  {
    id: "e2",
    period: "2023 – 2025",
    title: "MSc, Computer Science",
    org: "University of Texas at Arlington",
    location: "Arlington, Texas, USA",
  },
];

export default function EducationTimeline() {
  return (
    <Timeline heading="Education" items={education} />
  );
}
