"use client";

import { useRef, useState } from "react";

/**
 * Hero wrapper that carries a soft accent glow under the cursor.
 *
 * The pointer position is published as --mx / --my custom properties and a
 * single ::after overlay paints the gradient, so moving the mouse only
 * recalculates one radial gradient rather than re-rendering the hero.
 */
export default function HeroSpotlight({ children, className = "" }) {
  const ref = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, on: false });

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true
    });
  };

  return (
    <div
      ref={ref}
      className={`hero-spotlight-wrapper ${className}${glow.on ? " lit" : ""}`}
      style={{ "--mx": `${glow.x.toFixed(2)}%`, "--my": `${glow.y.toFixed(2)}%` }}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setGlow((g) => ({ ...g, on: false }))}
    >
      {children}
    </div>
  );
}
