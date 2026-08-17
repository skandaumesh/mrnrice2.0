"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";

const DURATION = 3200;
const SWAP = 600; // must match the CSS blur transition length

/**
 * Hero right-hand side: each product pack presented one at a time. On every
 * change the outgoing pack blurs out to the left while the incoming pack blurs
 * in from the right — a motion-blur swap — then the new one floats gently.
 */
export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [paused, setPaused] = useState(false);
  const idxRef = useRef(0);
  const timer = useRef(null);

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
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="stage-canvas">
        <span className="stage-shadow" aria-hidden="true" />

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

      <div className="stage-tabs" role="tablist" aria-label="Choose a product">
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
            {p.name}
          </button>
        ))}
      </div>
    </figure>
  );
}
