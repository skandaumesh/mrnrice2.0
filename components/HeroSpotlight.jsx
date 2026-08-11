"use client";

import { useState } from "react";

export default function HeroSpotlight({ children, className = "" }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      className={`hero-spotlight-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <div
        className="spotlight-layer"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(16, 185, 129, 0.18), rgba(245, 158, 11, 0.08) 40%, transparent 80%)`,
          opacity,
          transition: "opacity 0.4s ease"
        }}
      />
      {children}
    </div>
  );
}
