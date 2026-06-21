'use client'; // harmless no-op outside Next.js App Router; required inside it (this uses refs/state)

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './css/loader.css';

const Loader = forwardRef(function Loader({ onFinished }, ref) {
  const rootRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useImperativeHandle(ref, () => ({
    finish() {
      const el = rootRef.current;
      if (!el) return;
      el.classList.add('is-finishing');
      const handleEnd = (e) => {
        if (e.propertyName !== 'opacity') return;
        el.removeEventListener('transitionend', handleEnd);
        setHidden(true);
        onFinished?.();
      };
      el.addEventListener('transitionend', handleEnd);
    },
  }));

  if (hidden) return null;

  return (
    <div className="aj-loader is-playing" ref={rootRef}>
    <div className="aj-loader__content">
      <svg className="aj-mark" viewBox="311 295.5 638 638">
        <g className="aj-wrap">
          {/* the white letterform: drawn as an outline, then filled */}
          <path
            className="aj-letterform"
            pathLength="1000"
            transform="translate(0,1254) scale(0.1,-0.1)"
            d="M6240 8194 c-91 -19 -214 -83 -286 -147 -67 -61 -62 -54 -499 -752 -155 -247 -385 -612 -510 -810 -126 -198 -247 -390 -269 -426 -23 -36 -93 -147 -156 -247 -63 -100 -137 -218 -165 -262 -27 -44 -107 -171 -177 -283 -70 -111 -135 -223 -144 -247 -26 -71 -30 -208 -9 -286 31 -116 131 -239 238 -292 25 -12 80 -30 122 -39 144 -31 301 11 413 112 47 42 117 151 500 770 64 103 209 206 338 239 78 20 222 21 299 1 167 -43 308 -154 382 -302 39 -77 60 -151 82 -293 29 -181 200 -365 426 -458 249 -102 600 -106 895 -11 458 148 773 505 856 968 18 104 20 1191 2 1209 -18 18 -841 17 -856 -1 -7 -8 -12 -162 -14 -437 -4 -405 -5 -428 -26 -491 -103 -310 -449 -454 -740 -309 -104 52 -158 107 -347 352 -213 276 -255 366 -255 542 0 133 38 239 137 387 113 168 415 651 433 691 33 76 50 159 50 248 0 171 -52 294 -174 415 -58 58 -100 90 -150 114 -123 59 -260 75 -396 45z"
          />

          {/* the three accent shapes, drawn at their real final positions */}
          <polygon
            className="aj-shape aj-shape-triangle"
            points="814.5,415 771,481 858,481"
            fill="var(--white)"
          />
          <rect
            className="aj-shape aj-shape-square"
            x="770"
            y="498"
            width="88"
            height="71"
            rx="16"
            ry="16"
            fill="var(--accent)"
          />
          <circle
            className="aj-shape aj-shape-circle"
            cx="578.5"
            cy="759.5"
            r="40.5"
            fill="var(--accent)"
          />
        </g>
      </svg>
      <div className="aj-progress" aria-hidden="true">
        <span className="aj-progress__bar" />
      </div>
    </div>
    </div>
  );
});

export default Loader;
