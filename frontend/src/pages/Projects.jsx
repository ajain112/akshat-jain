import React, { useState } from "react";
import "./css/projects.css";
import { PROJECTS } from "../data/Projects"; // your data file 

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((p) => (p === id ? null : id));

  return (
    <section className="proj">
      <div className="proj__inner">
        <h1 className="proj__title">
          Projects <span className="accent">&amp; Case Studies</span>
        </h1>

        <p className="proj__hint">
          Click any card to see the objective, problem, hypothesis, approach, and visuals.
        </p>

        <ul className="proj__list">
          {PROJECTS.map((p) => {
            const isOpen = openId === p.id;
            return (
              <li key={p.id} className={`proj__card ${isOpen ? "is-open" : ""}`}>
                {/* Clickable header row */}
                <button
                  className="proj__header"
                  onClick={() => toggle(p.id)}
                  aria-expanded={isOpen}
                >
                  <div className="proj__cover">
                    {/* If you serve images from public/, paths look like /images/... */}
                    <img src={p.cover} alt={p.coverAlt || p.title} />
                  </div>

                  <div className="proj__meta">
                    <h2 className="proj__name">{p.title}</h2>
                    {p.tagline && <div className="proj__tagline">{p.tagline}</div>}

                    <p className="proj__summary">{p.summary}</p>

                    <div className="proj__cta">
                      <span className="proj__toggle">
                        {isOpen ? "Hide details" : "View details"}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expanded body */}
                <div className="proj__body" role="region">
                  <div className="proj__grid">
                    <div className="proj__col">
                      {p.objective && (
                        <>
                          <h3>Objective</h3>
                          <p>{p.objective}</p>
                        </>
                      )}

                      {p.problem && (
                        <>
                          <h3>Problem</h3>
                          <p>{p.problem}</p>
                        </>
                      )}

                      {p.hypothesis && (
                        <>
                          <h3>Hypothesis</h3>
                          <p>{p.hypothesis}</p>
                        </>
                      )}

                      {Array.isArray(p.approach) && p.approach.length > 0 && (
                        <>
                          <h3>Approach</h3>
                          <ul className="proj__bullets">
                            {p.approach.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {p.metrics && Object.keys(p.metrics).length > 0 && (
                        <>
                          <h3>Impact</h3>
                          <ul className="proj__metrics">
                            {Object.entries(p.metrics).map(([k, v]) => (
                              <li key={k}>
                                <strong>{k}:</strong> {v}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {p.links && (
                        <p className="proj__links">
                        {Object.entries(p.links).map(([platform, url]) => (
                            <a key={platform} href={url} target="_blank" rel="noreferrer">
                            View on {platform.charAt(0).toUpperCase() + platform.slice(1)} →
                            </a>
                            ))}
                        </p>
                    )}

                    </div>

                    {Array.isArray(p.images) && p.images.length > 0 && (
                      <div className="proj__col">
                        <div className="proj__gallery">
                          {p.images.map((img, i) => (
                            <figure key={i} className="proj__figure">
                              <img src={img.src} alt={img.alt || `${p.title} visual ${i + 1}`} />
                              {img.caption && <figcaption>{img.caption}</figcaption>}
                            </figure>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
