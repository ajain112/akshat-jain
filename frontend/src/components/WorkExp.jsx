// src/components/WorkExp.jsx
import React from "react";
import Timeline from "./Timeline";

// Replace with your real data
const internships = [
  {
    id: "w1",
    startDate: "2024-10-01", // Oct 2024
    period: "Oct 2024 – Current",
    title: "Product Designer and Developer",
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
    startDate: "2023-01-01", // Jan 2023
    period: "Jan 2023 – Jul 2023",
    title: "Software Designer and Developer",
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
    startDate: "2020-06-01", // Jun 2020
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
  {
    id: "w4",
    startDate: "2025-11-01", // Nov 2025
    period: "Nov 2025 – Current",
    title: "Product Designer and Developer",
    org: "Ayush Herbs, Inc.",
    location: "Redmond, WA, USA",
    details: [
      "Increased online sales by 60% YoY by optimizing UI/UX, information architecture, visual hierarchy, and conversion-focused user flows across the Ayush Herbs website.",
      "Led end-to-end redesign and greenfield build of two websites, delivering scalable, responsive interfaces through UX research, Figma design systems, and production-ready implementation",
      "Improved SEO performance and page speed by implementing SEO-compliant UI patterns, structured content, and reusable components, driving higher organic visibility and faster load times.",
    ],
  },
];

export default function WorkExp() {
  const sortedInternships = [...internships].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  return (
    <Timeline
      heading="Work Experience"
      items={sortedInternships}
    />
  );
}
