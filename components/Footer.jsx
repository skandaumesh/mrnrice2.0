import Link from "next/link";
import { products, company } from "@/lib/products";
import { photoCredits } from "@/lib/photos";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <img className="brand-mark" src="/logo.jpeg" alt="MRN Agro Industries logo" />
          <p className="footer-tag">
            Rice milling, processing and distribution from Raichur, Karnataka.
            Rooted in quality since {company.established}.
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
          <h4>Products</h4>
          {products.map((p) => (
            <Link key={p.slug} href={`/products#${p.slug}`}>{p.name}</Link>
          ))}
        </div>

        <div className="fcol">
          <h4>Reach Us</h4>
          <p>{company.name}<br />{company.city}, {company.state}, India</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
        </div>
      </div>

      <p className="shell footer-credit">
        Photographs on this site are freely-licensed images from Wikimedia Commons, used as
        placeholders until our own photography is available &mdash; {photoCredits.join("; ")}.
      </p>

      <div className="shell footer-base">
        <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Established {company.established} &middot; {company.city}</span>
      </div>
    </footer>
  );
}
