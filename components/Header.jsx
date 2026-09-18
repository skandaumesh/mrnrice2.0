"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, telHref } from "@/lib/products";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" }
];

const icons = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  pin: <><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  phone: <path d="M4.5 5.5c0 8 6 14 14 14l1.5-3-4-2-2 2a13 13 0 0 1-6.5-6.5l2-2-2-4-3 1.5Z" />
};

const sales = company.phones[0];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`header${stuck ? " stuck" : ""}`}>
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <img className="brand-mark" src="/logo.jpeg" alt="MRN Agro Industries logo" />
          <span className="brand-type">
            <strong>MRN Agro Industries</strong>
            <span>Raichur, Karnataka</span>
          </span>
        </Link>

        <nav className={`nav${open ? " open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={`cta${pathname === "/contact" ? " active" : ""}`}>
            Contact Us
          </Link>

          <span className="header-contacts">
            <a href={`mailto:${company.email}`} title={company.email} aria-label={`Email ${company.email}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{icons.mail}</svg>
            </a>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${company.city}, ${company.state}`}
              aria-label="Find us on Google Maps"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">{icons.pin}</svg>
            </a>
            <a href={telHref(sales.number)} title={sales.number} aria-label={`Call ${sales.team} on ${sales.number}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{icons.phone}</svg>
            </a>
          </span>
        </nav>

        <button
          className="burger"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
