// src/components/Timeline.jsx
import React from "react";
import "./css/Timeline.css";

/**
 * items: Array<{
 *   id?: string
 *   period?: string
 *   title?: string
 *   org?: string
 *   location?: string
 *   details?: string | string[]
 * }>
 */
export default function Timeline({ heading, items = [] }) {
  // guard to avoid map crashes
  const list = Array.isArray(items) ? items : [];

  return (
    <section className="tl">
      {heading && <h2 className="tl__heading">{heading}</h2>}

      {/* NEW: scroller wrapper */}
      <div className="tl__scroller">
        {/* NEW: tl__track class so rail spans full content width */}
        <ol className="tl__list tl__track">
          {list.map((it, i) => {
            const bottom = i % 2 === 1;

            return (
              <li
                key={it.id || i}
                className={`tl__item ${bottom ? "tl__item--bottom" : ""}`}
              >
                <span className="tl__dot" aria-hidden="true" />

                <article className="tl__bubble">
                  {it.period && <span className="tl__period">{it.period}</span>}
                  {it.title && <h3 className="tl__title">{it.title}</h3>}
                  {it.org && <p className="tl__org">{it.org}</p>}
                  {it.location && <p className="tl__location">{it.location}</p>}

                  {Array.isArray(it.details) ? (
                    <ul className="tl__details tl__details--list">
                      {it.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  ) : it.details ? (
                    <p className="tl__details">{it.details}</p>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
