"use client";

import { useState } from "react";
import { processSteps } from "@/lib/products";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Quality process: a compact row of selectable steps with one detail panel.
 *
 * The step buttons deliberately carry only a number and a title. Showing each
 * step's body text as well made six tall blocks that repeated what the panel
 * below already says, which collapsed badly on narrow screens.
 */
export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <div className="process">
      <ol className="process-steps" role="tablist" aria-label="Quality process steps">
        {processSteps.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              role="tab"
              id={`pstep-tab-${i}`}
              aria-selected={i === active}
              aria-controls="pstep-panel"
              className={`pstep${i === active ? " on" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="pstep-no">{pad(i + 1)}</span>
              <span className="pstep-title">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div
        className="pstep-panel"
        id="pstep-panel"
        role="tabpanel"
        aria-labelledby={`pstep-tab-${active}`}
      >
        <span className="eyebrow">
          Step {pad(active + 1)} of {pad(processSteps.length)}
        </span>
        <h3>{step.title}</h3>
        <p className="pstep-metric">{step.metric}</p>
        <p>{step.text}</p>
        <p className="pstep-detail">{step.detail}</p>
      </div>
    </div>
  );
}
