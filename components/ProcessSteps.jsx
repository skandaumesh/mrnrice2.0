"use client";

import { useEffect, useState } from "react";
import { processSteps } from "@/lib/products";

const DWELL = 5000; // ms each step holds before advancing
const pad = (n) => String(n).padStart(2, "0");

/**
 * Quality process as a progress rail that walks itself through the six steps.
 *
 * The rail fills as it advances, the active node lights up, and a thin bar on
 * the panel shows how long the current step has left. Selecting a node takes
 * over manually. It pauses on hover and focus, and does not self-advance at
 * all under prefers-reduced-motion.
 */
export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(false);

  // start self-advancing only once we know motion is welcome
  useEffect(() => {
    setAuto(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!auto || paused) return;
    const t = setTimeout(
      () => setActive((i) => (i + 1) % processSteps.length),
      DWELL
    );
    return () => clearTimeout(t);
  }, [active, paused, auto]);

  const step = processSteps[active];
  const last = processSteps.length - 1;

  return (
    <div
      className="qp"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ol
        className="qp-rail"
        role="tablist"
        aria-label="Quality process steps"
        /* drives the width of the filled portion of the rail */
        style={{ "--p": last ? active / last : 0 }}
      >
        {processSteps.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              role="tab"
              id={`qp-tab-${i}`}
              aria-selected={i === active}
              aria-controls="qp-panel"
              className={`qp-step${i === active ? " on" : ""}${i < active ? " done" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="qp-dot">{pad(i + 1)}</span>
              <span className="qp-label">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="qp-panel" id="qp-panel" role="tabpanel" aria-labelledby={`qp-tab-${active}`}>
        <div
          className={`qp-progress${paused || !auto ? " still" : ""}`}
          aria-hidden="true"
        >
          {/* keyed on `active` so the fill restarts with each step */}
          <span key={active} style={{ animationDuration: `${DWELL}ms` }} />
        </div>

        <div className="qp-head">
          <span className="qp-count">
            {pad(active + 1)} <i>/ {pad(processSteps.length)}</i>
          </span>
          <span className="qp-metric">{step.metric}</span>
        </div>

        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <p className="qp-note">{step.detail}</p>
      </div>
    </div>
  );
}
