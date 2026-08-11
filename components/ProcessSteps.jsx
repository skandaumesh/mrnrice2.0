"use client";

import { useState } from "react";
import { processSteps } from "@/lib/products";

const stepDetails = [
  { metric: "Direct Procurement", detail: "Procured from Raichur farmers with moisture testing at farm gate (13.5-14%)." },
  { metric: "Pre-Cleaning", detail: "Vibratory screeners & magnetic separators remove straw, dust, and heavy particles." },
  { metric: "De-Hulking & Milling", detail: "Modern rubber-roll shellers achieve minimal grain breakage at 8 tons/hour throughput." },
  { metric: "Grading & Optical Sort", detail: "CCD Color Sorters remove discolored or broken grains with 99.8% precision." },
  { metric: "Quality Testing", detail: "Lab check for moisture levels, average grain length, and chalkiness index." },
  { metric: "Hygienic Packaging", detail: "Automated 25kg & 50kg bag packing with seal integrity verification." }
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="interactive-process">
      <ol className="journey" role="tablist" aria-label="Quality process steps">
        {processSteps.map((s, i) => (
          <li
            className={`jstep${i === activeStep ? " active-step" : ""}`}
            key={s.title}
            onClick={() => setActiveStep(i)}
            onMouseEnter={() => setActiveStep(i)}
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
          <h4>{processSteps[activeStep].title} — {stepDetails[activeStep].metric}</h4>
        </div>
        <p className="inspector-body">{stepDetails[activeStep].detail}</p>
      </div>
    </div>
  );
}
