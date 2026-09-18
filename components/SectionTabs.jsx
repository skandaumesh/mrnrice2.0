"use client";

import { useEffect, useRef, useState } from "react";

/**
 * In-page jump bar for the home page's sections. Sticks just below the site
 * header and highlights whichever section you are currently reading.
 *
 * `sections` is [{ id, label }] where each id matches a section on the page.
 */
export default function SectionTabs({ sections }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const barRef = useRef(null);

  useEffect(() => {
    const targets = sections
      .map((s) => ({ id: s.id, el: document.getElementById(s.id) }))
      .filter((s) => s.el);
    if (!targets.length) return;

    // The reading line sits just under the sticky chrome, so a section becomes
    // active once its top passes beneath it. Below 720px the bar is static and
    // scrolls away, so fall back to a fixed line rather than a negative one.
    const onScroll = () => {
      const barBottom = barRef.current?.getBoundingClientRect().bottom ?? 0;
      const line = Math.max(barBottom, 120) + 8;
      let current = targets[0].id;
      for (const { id, el } of targets) {
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <nav className="section-tabs" aria-label="Sections on this page">
      <div className="shell">
        <div className="section-tabs-inner" ref={barRef}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "on" : undefined}
              aria-current={active === s.id ? "true" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
