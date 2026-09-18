/**
 * A photograph in a rounded frame.
 *
 * Takes `src`/`alt` rather than a whole photo object: these render inside a
 * client component, so every prop is serialised into the page payload, and
 * passing the object would ship its caption and credit text to the browser
 * even though neither is displayed.
 */
export default function Photo({ src, alt, ratio = "4/3", className = "" }) {
  return (
    <figure className={`photo${className ? " " + className : ""}`}>
      <div className="photo-frame" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </figure>
  );
}
