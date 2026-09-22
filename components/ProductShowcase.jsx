"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";

const DURATION = 3000; // each pack holds for 3s before the next one swaps in
const SWAP = 600; // must match the CSS blur transition length

/** "MRN Gold Black Bullet" -> "Black Bullet" — the tab row reads as the colour range. */
const tabLabel = (name) => name.replace(/^MRN Gold\s+/, "");

/**
 * Hero right-hand side: each product pack presented one at a time. On every
 * change the outgoing pack blurs out to the left while the incoming pack blurs
 * in from the right — a motion-blur swap — then the new one floats gently.
 */
export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const [allowTilt, setAllowTilt] = useState(false);
  const idxRef = useRef(0);
  const timer = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setAllowTilt(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  /* Cursor-following 3D tilt, the same idiom as TiltCard on the product cards.
     It sits on a wrapper rather than the pack itself: the pack already owns
     its transform via the float and blur-swap keyframes, and an animation
     beats an inline style, so tilting it directly would do nothing. */
  const onPointerMove = (e) => {
    const el = canvasRef.current;
    if (!el || !allowTilt || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (0.5 - py) * 14, y: (px - 0.5) * 20, on: true });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0, on: false });

  const go = useCallback((next) => {
    const cur = idxRef.current;
    const n = ((next % products.length) + products.length) % products.length;
    if (n === cur) return;
    idxRef.current = n;
    setPrev(cur);
    setIndex(n);
  }, []);

  // auto-advance — keep cycling even under reduced motion (the blur is the
  // part that's suppressed there, not the product rotation itself)
  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(timer.current);
  }, [index, paused, go]);

  // drop the outgoing pack once its blur-out has finished
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), SWAP);
    return () => clearTimeout(t);
  }, [index, prev]);

  const active = products[index];

  return (
    <figure
      className="stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      /* keyboard focus only — a click also fires focus, and focus then stays
         on the tab, which would stop the rotation permanently */
      onFocus={(e) => {
        if (e.target.matches?.(":focus-visible")) setPaused(true);
      }}
      onBlur={() => setPaused(false)}
    >
      <div
        className="stage-canvas"
        ref={canvasRef}
        onPointerMove={onPointerMove}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
      >
        <span className="stage-shadow" aria-hidden="true" />

        <div
          className={`stage-tilt${tilt.on ? " lifted" : ""}`}
          style={{
            transform:
              `perspective(900px) rotateX(${tilt.x.toFixed(2)}deg) ` +
              `rotateY(${tilt.y.toFixed(2)}deg) scale(${tilt.on ? 1.05 : 1})`
          }}
        >
          {prev !== null && prev !== index && (
            <img
              key={`out-${prev}`}
              className="stage-pack leaving"
              src={products[prev].image}
              alt=""
              aria-hidden="true"
            />
          )}

          <img
            key={`in-${index}`}
            className="stage-pack entering"
            src={active.image}
            alt={`${active.name} pack`}
          />
        </div>
      </div>

      <div className="stage-tabs" role="tablist" aria-label="Choose a rice variety">
        {products.map((p, i) => (
          <button
            key={p.slug}
            role="tab"
            aria-selected={i === index}
            className={`stage-tab${i === index ? " on" : ""}`}
            style={{ "--dur": `${DURATION}ms` }}
            onClick={() => go(i)}
          >
            <span className="bar" key={`${i}-${index}`} />
            {tabLabel(p.name)}
          </button>
        ))}
      </div>
    </figure>
  );
}
