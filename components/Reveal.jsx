"use client";

import { useEffect, useRef, useState } from "react";

/** Fades content up the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", style, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? " " + className : ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
