/**
 * Plain hero wrapper. (The cursor-following spotlight glow was removed to keep
 * the organic palette clean — this just carries the `hero` styling now.)
 */
export default function HeroSpotlight({ children, className = "" }) {
  return (
    <div className={`hero-spotlight-wrapper ${className}`} style={{ position: "relative" }}>
      {children}
    </div>
  );
}
