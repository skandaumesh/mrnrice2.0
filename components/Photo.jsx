/** A photograph with its caption and credit, as a print layout would carry it. */
export default function Photo({ photo, ratio = "4/3", caption = true, className = "" }) {
  return (
    <figure className={`photo${className ? " " + className : ""}`}>
      <div className="photo-frame" style={{ aspectRatio: ratio }}>
        <img src={photo.src} alt={photo.alt} loading="lazy" />
      </div>
      {caption && (
        <figcaption>
          <em>{photo.caption}</em>
          <span>Photo: {photo.credit}</span>
        </figcaption>
      )}
    </figure>
  );
}
