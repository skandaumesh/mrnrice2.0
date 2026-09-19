"use client";

import { useEffect, useRef } from "react";
import { reasons } from "@/lib/products";

const SPEED = 0.45; // px per frame — a slow drift, not a slideshow

/**
 * Why-choose-us reasons as a horizontal track of square cards.
 *
 * It drifts continuously on its own and can also be dragged or scrolled by
 * hand. The list is rendered twice so the loop is seamless: once the track
 * passes the halfway mark we subtract half the width, which lands on an
 * identical frame, so there is no visible jump back to the start.
 */
export default function ReasonsCarousel() {
  const trackRef = useRef(null);
  const paused = useRef(false);
  const drag = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // a constantly moving strip is exactly what reduced-motion is for
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame;
    const step = () => {
      if (!paused.current) {
        track.scrollLeft += SPEED;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  /** keep a hand-scrolled position inside the first copy of the list */
  const normalise = () => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (track.scrollLeft >= half) track.scrollLeft -= half;
    else if (track.scrollLeft < 0) track.scrollLeft += half;
  };

  const onPointerDown = (e) => {
    const track = trackRef.current;
    paused.current = true;
    drag.current = { x: e.clientX, left: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current) return;
    const track = trackRef.current;
    track.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
    normalise();
  };

  const endDrag = (e) => {
    if (!drag.current) return;
    const track = trackRef.current;
    if (track.hasPointerCapture?.(e.pointerId)) track.releasePointerCapture(e.pointerId);
    drag.current = null;
    paused.current = false;
  };

  // the second pass is decorative: screen readers should hear eight reasons, not sixteen
  const cards = [...reasons, ...reasons];

  return (
    <div
      className="rcarousel"
      ref={trackRef}
      tabIndex={0}
      role="region"
      aria-label="Why choose us — scroll for more"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { if (!drag.current) paused.current = false; }}
      onFocus={() => { paused.current = true; }}
      onBlur={() => { if (!drag.current) paused.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onScroll={() => { if (!drag.current && paused.current) normalise(); }}
    >
      {cards.map((r, i) => (
        <article
          className="rcard"
          key={`${r.no}-${i}`}
          aria-hidden={i >= reasons.length ? "true" : undefined}
        >
          <span className="n">{r.no}</span>
          <div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
