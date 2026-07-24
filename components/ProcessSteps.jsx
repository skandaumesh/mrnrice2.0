import { processSteps } from "@/lib/products";

/** The quality journey as a connected timeline — every stage visible at once. */
export default function ProcessSteps() {
  return (
    <ol className="journey">
      {processSteps.map((s, i) => (
        <li className="jstep" key={s.title}>
          <span className="jnode">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="jtitle">{s.title}</h3>
          <p className="jtext">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
