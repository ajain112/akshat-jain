import React, { useId, useRef, useState, useEffect } from "react";
import "./css/Skills.css";

/* Helper: build URLs (Devicon first, then Simple Icons) */
const ICONS = {
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  illustrator: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
  photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg",
  canva: "https://cdn.simpleicons.org/Canva",             // Simple Icons
  notion: "https://cdn.simpleicons.org/Notion/ffffff",     // force white glyph

  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",

  cplusplus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",

  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  microsoftexcel: "https://cdn.simpleicons.org/MicrosoftExcel/21A366",

  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  jira: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",

  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  vercel: "https://cdn.simpleicons.org/Vercel/ffffff",
  netlify: "https://cdn.simpleicons.org/Netlify/00C7B7",
};

/* Your data now references the remote URLs */
const SKILLS = [
  {
    id: "design",
    label: "Design",
    items: [
      { name: "Figma", url: ICONS.figma },
      { name: "Illustrator", url: ICONS.illustrator },
      { name: "Photoshop", url: ICONS.photoshop },
      { name: "Canva", url: ICONS.canva },
      { name: "Notion", url: ICONS.notion },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML", url: ICONS.html },
      { name: "CSS", url: ICONS.css },
      { name: "JavaScript", url: ICONS.javascript },
      { name: "React", url: ICONS.react },
      { name: "Redux", url: ICONS.redux },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    items: [
      { name: "C++", url: ICONS.cplusplus },
      { name: "Java", url: ICONS.java },
      { name: "Python", url: ICONS.python },
      { name: "TypeScript", url: ICONS.typescript },
    ],
  },
  {
    id: "data",
    label: "Data & Tools",
    items: [
      { name: "MySQL", url: ICONS.mysql },
      { name: "Pandas", url: ICONS.pandas },
      { name: "NumPy", url: ICONS.numpy },
      { name: "Excel", url: ICONS.microsoftexcel },
    ],
  },
  {
    id: "collab",
    label: "Collaboration",
    items: [
      { name: "Git", url: ICONS.git },
      { name: "GitHub", url: ICONS.github },
      { name: "Notion", url: ICONS.notion },
      { name: "Jira", url: ICONS.jira },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Env",
    items: [
      { name: "Docker", url: ICONS.docker },
      { name: "Linux", url: ICONS.linux },
      { name: "Vercel", url: ICONS.vercel },
      { name: "Netlify", url: ICONS.netlify },
    ],
  },
];

/* Small img component with fallback */
function RemoteIcon({ url, label, fallback = "🧰" }) {
  const [err, setErr] = useState(false);
  if (err || !url) {
    return <span aria-hidden="true" style={{ fontSize: 28 }}>{fallback}</span>;
  }
  return (
    <img
      src={url}
      alt=""
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setErr(true)}
      width={48}
      height={48}
      style={{ width: 48, height: 48 }}
      aria-label={label}
    />
  );
}

export default function SkillsCarousel({ sections = SKILLS, title = "Tools & Skills" }) {
  const [active, setActive] = useState(0);
  const listId = useId();
  const trackRef = useRef(null);

  useEffect(() => {
    const wrap = trackRef.current?.parentElement;
    if (!wrap) return;
    const ro = new ResizeObserver(() => {
      wrap.style.setProperty("--panel-h", `${trackRef.current?.children[active]?.offsetHeight || 0}px`);
    });
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [active]);

  const onKeyDown = (e) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    setActive((prev) => {
      if (e.key === "ArrowRight") return (prev + 1) % sections.length;
      if (e.key === "ArrowLeft") return (prev - 1 + sections.length) % sections.length;
      if (e.key === "Home") return 0;
      if (e.key === "End") return sections.length - 1;
      return prev;
    });
  };

  return (
    <section className="skills">
      <div className="skills__header">
        <h2 className="skills__title">
          Tools <span className="accent">&amp; Skills</span>
        </h2>
      </div>

      <div className="skills__tabs" role="tablist" aria-label="Skills categories" onKeyDown={onKeyDown} id={listId}>
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            role="tab"
            aria-selected={active === idx}
            aria-controls={`${sec.id}-panel`}
            id={`${sec.id}-tab`}
            className={`skills__tab ${active === idx ? "is-active" : ""}`}
            onClick={() => setActive(idx)}
            data-tabindex={idx}
            tabIndex={active === idx ? 0 : -1}
          >
            {sec.label}
            {active === idx && <span className="skills__tab-underline" aria-hidden="true" />}
          </button>
        ))}
      </div>

      <div className="skills__viewport" aria-labelledby={`${sections[active].id}-tab`}>
        <div className="skills__track" ref={trackRef} style={{ transform: `translateX(${-active * 100}%)` }}>
          {sections.map((sec) => (
            <div key={sec.id} role="tabpanel" id={`${sec.id}-panel`} aria-labelledby={`${sec.id}-tab`} className="skills__panel" tabIndex={0}>
              <ul className="skills__grid">
                {sec.items.map((it) => (
                  <li key={it.name} className="skills__item" title={it.name}>
                    <div className="skills__icon" aria-hidden="true">
                      <RemoteIcon url={it.url} label={it.name} />
                    </div>
                    <p className="skills__label">{it.name}</p>
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
