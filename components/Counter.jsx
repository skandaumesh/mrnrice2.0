"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to `value` once it enters the viewport. */
export default function Counter({ value, plain = false, duration = 1200 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(plain ? value - 30 : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(el);

        const from = plain ? Math.max(value - 30, 0) : 0;
        const start = performance.now();
        let frame;

        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(from + (value - from) * eased));
          if (p < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, plain, duration]);

  return <span ref={ref}>{display}</span>;
}
