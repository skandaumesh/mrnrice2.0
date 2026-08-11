"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" }
];

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
