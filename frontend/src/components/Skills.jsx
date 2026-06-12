import React, { useId, useRef, useState, useEffect } from "react";
import "./css/Skills.css";

/*
  Icon strategy:
  1. If a skill has a custom url, use it.
  2. Else if it has iconKey, use that.
  3. Else generate icon key from the skill name.
  4. Try Devicon first.
  5. If Devicon fails, try Simple Icons.
  6. If both fail, show text fallback.
*/

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SIMPLE_ICON_BASE = "https://cdn.simpleicons.org";

const ICON_OVERRIDES = {
  "C++": {
    devicon: `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  },
  "Adobe Illustrator": {
    devicon: `${DEVICON_BASE}/illustrator/illustrator-plain.svg`,
  },
  Illustrator: {
    devicon: `${DEVICON_BASE}/illustrator/illustrator-plain.svg`,
  },
  Photoshop: {
    devicon: `${DEVICON_BASE}/photoshop/photoshop-plain.svg`,
  },
  "Adobe XD": {
    simple: `${SIMPLE_ICON_BASE}/AdobeXD/FF61F6`,
  },
  Canva: {
    simple: `${SIMPLE_ICON_BASE}/Canva`,
  },
  Notion: {
    simple: `${SIMPLE_ICON_BASE}/Notion/ffffff`,
  },
  Excel: {
    simple: `${SIMPLE_ICON_BASE}/MicrosoftExcel/21A366`,
  },
  "Next.js": {
    devicon: `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
    simple: `${SIMPLE_ICON_BASE}/Nextdotjs/ffffff`,
  },
  "Tailwind CSS": {
    devicon: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  },
  "Material UI": {
    devicon: `${DEVICON_BASE}/materialui/materialui-original.svg`,
    simple: `${SIMPLE_ICON_BASE}/mui/007FFF`,
  },
  WordPress: {
    devicon: `${DEVICON_BASE}/wordpress/wordpress-original.svg`,
  },
  GitHub: {
    devicon: `${DEVICON_BASE}/github/github-original.svg`,
    simple: `${SIMPLE_ICON_BASE}/GitHub/ffffff`,
  },
  Vercel: {
    simple: `${SIMPLE_ICON_BASE}/Vercel/ffffff`,
  },
  Netlify: {
    simple: `${SIMPLE_ICON_BASE}/Netlify/00C7B7`,
  },
  ChatGPT: {
    simple: `${SIMPLE_ICON_BASE}/OpenAI/ffffff`,
  },
  Claude: {
    simple: `${SIMPLE_ICON_BASE}/Anthropic/ffffff`,
  },
  Lovable: {
    simple: `${SIMPLE_ICON_BASE}/Lovable/ff5a5f`,
  },
  "Google Labs": {
    simple: `${SIMPLE_ICON_BASE}/Google/4285F4`,
  },
};

function toDeviconKey(name) {
  return name
    .toLowerCase()
    .replace(/\+\+/g, "plusplus")
    .replace(/\.js/g, "js")
    .replace(/#/g, "sharp")
    .replace(/[^a-z0-9]/g, "");
}

function getIconSources(skill) {
  if (skill.url) {
    return [skill.url];
  }

  const name = skill.iconKey || skill.name;
  const override = ICON_OVERRIDES[skill.name];

  const generatedKey = toDeviconKey(name);

  const sources = [];

  if (override?.devicon) sources.push(override.devicon);

  sources.push(`${DEVICON_BASE}/${generatedKey}/${generatedKey}-original.svg`);
  sources.push(`${DEVICON_BASE}/${generatedKey}/${generatedKey}-plain.svg`);

  if (override?.simple) sources.push(override.simple);

  sources.push(`${SIMPLE_ICON_BASE}/${generatedKey}/ffffff`);

  return [...new Set(sources)];
}

const SKILLS = [
  {
    id: "design",
    label: "Design",
    items: [
      { name: "Figma" },
      { name: "Adobe Illustrator" },
      { name: "Photoshop" },
      { name: "Canva" },
      { name: "Adobe XD" },
      { name: "Prototyping", fallback: "⚡" },
      { name: "UX Research", fallback: "🔍" },
      { name: "Usability Testing", fallback: "🧪" },
      { name: "Design Systems", fallback: "▦" },
      { name: "Accessibility", fallback: "♿" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML5", iconKey: "html5" },
      { name: "CSS3", iconKey: "css3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Redux" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "WordPress" },
      { name: "Shopify" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "ai",
    label: "AI & Product",
    items: [
      { name: "ChatGPT" },
      { name: "Claude" },
      { name: "Lovable" },
      { name: "Google Labs" },
      { name: "Prompt Engineering", fallback: "✦" },
      { name: "AI UX Patterns", fallback: "AI" },
      { name: "Product Thinking", fallback: "💡" },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    items: [
      { name: "C++" },
      { name: "Python" },
    ],
  },
  {
    id: "data",
    label: "Data & Tools",
    items: [
      { name: "MySQL" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Excel" },
      { name: "Google Analytics", fallback: "GA" },
    ],
  },
  {
    id: "collab",
    label: "Collaboration",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Notion" },
      { name: "Jira" },
      { name: "Agile", fallback: "↻" },
      { name: "Scrum", fallback: "☑" },
      { name: "Team Leadership", fallback: "👥" },
      { name: "Stakeholder Communication", fallback: "💬" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Env",
    items: [
      { name: "Docker" },
      { name: "Linux" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "VS Code", iconKey: "vscode" },
    ],
  },
];

function RemoteIcon({ skill }) {
  const sources = getIconSources(skill);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const currentSource = sources[sourceIndex];

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed || !currentSource) {
    return (
      <span className="skills__fallback" aria-hidden="true">
        {skill.fallback || skill.name.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      src={currentSource}
      alt={`${skill.name} logo`}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      width={48}
      height={48}
      className="skills__img"
    />
  );
}

export default function SkillsCarousel({
  sections = SKILLS,
  title = "Tools & Skills",
}) {
  const [active, setActive] = useState(0);
  const listId = useId();
  const trackRef = useRef(null);

  useEffect(() => {
    const wrap = trackRef.current?.parentElement;
    const activePanel = trackRef.current?.children[active];

    if (!wrap || !activePanel) return;

    const updateHeight = () => {
      wrap.style.setProperty("--panel-h", `${activePanel.offsetHeight}px`);
    };

    updateHeight();

    const ro = new ResizeObserver(updateHeight);
    ro.observe(activePanel);

    return () => ro.disconnect();
  }, [active]);

  const onKeyDown = (e) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;

    e.preventDefault();

    setActive((prev) => {
      if (e.key === "ArrowRight") return (prev + 1) % sections.length;
      if (e.key === "ArrowLeft")
        return (prev - 1 + sections.length) % sections.length;
      if (e.key === "Home") return 0;
      if (e.key === "End") return sections.length - 1;
      return prev;
    });
  };

  return (
    <section className="skills" aria-labelledby="skills-title">
      <div className="skills__header">
        <h2 className="skills__title" id="skills-title">
          {title.includes("&") ? (
            <>
              Tools <span className="accent">&amp; Skills</span>
            </>
          ) : (
            title
          )}
        </h2>
      </div>

      <div
        className="skills__tabs"
        role="tablist"
        aria-label="Skills categories"
        onKeyDown={onKeyDown}
        id={listId}
      >
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            role="tab"
            type="button"
            aria-selected={active === idx}
            aria-controls={`${sec.id}-panel`}
            id={`${sec.id}-tab`}
            className={`skills__tab ${active === idx ? "is-active" : ""}`}
            onClick={() => setActive(idx)}
            tabIndex={active === idx ? 0 : -1}
          >
            {sec.label}
            {active === idx && (
              <span className="skills__tab-underline" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>

      <div
        className="skills__viewport"
        aria-labelledby={`${sections[active].id}-tab`}
      >
        <div
          className="skills__track"
          ref={trackRef}
          style={{ transform: `translateX(${-active * 100}%)` }}
        >
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              role="tabpanel"
              id={`${sec.id}-panel`}
              aria-labelledby={`${sec.id}-tab`}
              className="skills__panel"
              tabIndex={active === idx ? 0 : -1}
              aria-hidden={active !== idx}
            >
              <ul className="skills__grid">
                {sec.items.map((skill) => (
                  <li key={skill.name} className="skills__item" title={skill.name}>
                    <div className="skills__icon" aria-hidden="true">
                      <RemoteIcon skill={skill} />
                    </div>
                    <p className="skills__label">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}