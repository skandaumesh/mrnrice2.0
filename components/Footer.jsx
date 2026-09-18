import Link from "next/link";
import { products, company, telHref } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <img className="brand-mark" src="/logo.jpeg" alt="MRN Agro Industries logo" />
          <p className="footer-tag">
            Rice manufacturing from Raichur, Karnataka, packed under our own{" "}
            {company.brand} brand. Built on quality since {company.established}.
          </p>
        </div>

        <div className="fcol">
          <h4>Company</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="fcol">
          <h4>{company.brand} Range</h4>
          {products.map((p) => (
            <Link key={p.slug} href={`/products#${p.slug}`}>{p.name}</Link>
          ))}
        </div>

        <div className="fcol">
          <h4>Reach Us</h4>
          <p>
            {company.name}<br />
            {company.address.line1}<br />
            {company.address.line2}<br />
            {company.address.line3}
          </p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          {company.phones.map((p) => (
            <a key={p.number} href={telHref(p.number)}>
              {p.team}: {p.number}
            </a>
          ))}

          <div className="footer-map">
            <iframe
              src={company.mapsEmbedUrl}
              title={`Map showing ${company.name}, ${company.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            className="footer-map-link"
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <p className="shell footer-states">
        <strong>Where we supply:</strong> {company.statesServed.join(" · ")}
      </p>

      <div className="shell footer-base">
        <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Established {company.established} &middot; {company.city}</span>
      </div>
    </footer>
  );
}
