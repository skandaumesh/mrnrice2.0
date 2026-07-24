import Link from "next/link";

/** Closing call-to-action: a centred green panel floating on the page. */
export default function CTA({ title, text, label = "Contact us today", href = "/contact" }) {
  const external = !href.startsWith("/");
  const Button = external ? "a" : Link;

  return (
    <section className="section cta">
      <div className="shell">
        <div className="cta-panel">
          <span className="cta-badge">Get in touch</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button href={href} className="btn btn-light">
            {label} <span className="arw">&rarr;</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
