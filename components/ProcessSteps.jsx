import { processSteps } from "@/lib/products";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Quality process as a vertical timeline.
 *
 * No tabs, no panel, no state: a process is a sequence, so it reads as one
 * top to bottom with every stage visible at once. That also makes this a
 * plain server component — it ships no JavaScript.
 */
export default function ProcessSteps() {
  return (
    <ol className="tl">
      {processSteps.map((s, i) => (
        <li key={s.title}>
          <span className="tl-node" aria-hidden="true">{pad(i + 1)}</span>
          <div className="tl-body">
            <div className="tl-head">
              <h3>{s.title}</h3>
              <span className="tl-metric">{s.metric}</span>
            </div>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
