// src/components/WorkExp.jsx
import React from "react";
import Timeline from "./Timeline";

// Replace with your real data
const internships = [
  {
    id: "w1",
    period: "Oct 2024 – Feb 2025",
    title: "Product Manager",
    org: "Young Talent Development Foundation",
    location: "Bothell, WA, USA",
    details: [
      "Redesigned family collaboration app workflows in Figma + Fluent UI, increasing adoption by 25% by aligning features with artist-like user needs.",
      "Conducted 20+ interviews and usability tests, identifying inefficiencies and boosting task completion rates by 18%.",
      "Facilitated Agile sprints with engineers & designers, accelerating project delivery by 15% while ensuring user-centered design.",
    ],
  },
  {
    id: "w2",
    period: "Feb 2023 – Apr 2023",
    title: "Software Designer and Developer Intern",
    org: "Allsoft Technologies",
    location: "Indore, MP, India",
    details: [
      "Modernized Android and web interfaces with responsive layouts, boosting user engagement by 30%.",
      "Partnered with developers via Azure DevOps QA workflows, reducing design-to-code mismatches by 20%.",
      "Introduced AI-based personalization prototypes, influencing product roadmap and driving adoption of adaptive UX solutions.",
    ],
  },
  {
    id: "w3",
    period: "Jun 2020 – Sept 2020",
    title: "Software Designer and Developer Intern",
    org: "Techshala",
    location: "Indore, MP, India",
    details: [
      "Developed Figma component libraries for 3+ internal tools, ensuring UI consistency across platforms.",
      "Led a mobile-first redesign using AI-driven usability feedback, improving retention by 35% and raising satisfaction scores.",
      "Collaborated with engineers to document and hand off design specs, reducing back-and-forth iterations by 20%.",
    ],
  },
];

export default function WorkExp() {
  return (
    <Timeline
      heading="Work Experience"
      items={internships}
      railGap="200px"
    />
  );
}
