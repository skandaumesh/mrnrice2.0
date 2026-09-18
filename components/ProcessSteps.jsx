"use client";

import { useState } from "react";
import { processSteps } from "@/lib/products";

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const active = processSteps[activeStep];

  return (
    <div className="interactive-process">
      <ol className="journey" role="tablist" aria-label="Quality process steps">
        {processSteps.map((s, i) => (
          <li
            className={`jstep${i === activeStep ? " active-step" : ""}`}
            key={s.title}
            onClick={() => setActiveStep(i)}
            onMouseEnter={() => setActiveStep(i)}
            onFocus={() => setActiveStep(i)}
            role="tab"
            aria-selected={i === activeStep}
            tabIndex={0}
          >
            <span className="jnode">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="jtitle">{s.title}</h3>
            <p className="jtext">{s.text}</p>
          </li>
        ))}
      </ol>

      {/* Interactive Details Inspector */}
      <div className="process-inspector">
        <div className="inspector-head">
          <span className="eyebrow">Step {String(activeStep + 1).padStart(2, "0")} Highlights</span>
          <h4>{active.title} &mdash; {active.metric}</h4>
        </div>
        <p className="inspector-body">{active.detail}</p>
      </div>
    </div>
  );
}
