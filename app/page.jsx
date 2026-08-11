import Link from "next/link";
import ProductShowcase from "@/components/ProductShowcase";
import ProcessSteps from "@/components/ProcessSteps";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import HeroSpotlight from "@/components/HeroSpotlight";
import ProductGridInteractive from "@/components/ProductGridInteractive";
import TiltCard from "@/components/TiltCard";
import { reasons, testimonials } from "@/lib/products";
import { photos } from "@/lib/photos";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <HeroSpotlight className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-place">Raichur, Karnataka &middot; Since 2016</p>
            <h1>From Karnataka&rsquo;s fields to quality tables</h1>
            <p className="lede">
              Premium rice products, responsibly sourced and expertly processed. At MRN Agro
              Industries, we are committed to delivering quality, consistency, and trust in
              every grain.
            </p>

            <div className="btn-row">
              <Link href="/products" className="btn btn-gold">
                Explore our products <span className="arw">&rarr;</span>
              </Link>
              <Link href="/contact" className="btn btn-outline">Contact us</Link>
            </div>

            <div className="hero-meta">
              <div>
                <b><Counter value={2016} plain /></b>
                <span>Established</span>
              </div>
              <div>
                <b><Counter value={8} /> <i>tons / hour</i></b>
                <span>Milling capacity</span>
              </div>
              <div>
                <b>Raichur</b>
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>

          <ProductShowcase />
        </div>
      </HeroSpotlight>

      {/* ---------- ABOUT ---------- */}
      <section className="section">
        <div className="shell split wide-right">
          <Reveal>
            <Photo photo={photos.farmers} ratio="4/4.4" />
          </Reveal>

          <Reveal>
            <span className="eyebrow">About us</span>
            <h2>Rooted in quality since 2016</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Established in 2016, MRN Agro Industries has grown into a trusted name in rice milling
              and processing in Karnataka. Operating from our facility in Raichur, we combine
              traditional agricultural values with modern processing standards to deliver products
              that meet the highest expectations of quality and consistency.
            </p>
            <p className="muted">
              From sourcing premium paddy directly from local farmers to ensuring hygienic
              processing and timely delivery, every step of our journey reflects our commitment
              to excellence.
            </p>

            <ul className="ticks">
              <li>Direct sourcing from farmers across Raichur district</li>
              <li>Modern milling and processing facility</li>
              <li>Installed milling capacity of 8 tons per hour</li>
            </ul>

            <div className="btn-row" style={{ marginTop: 26 }}>
              <Link href="/about" className="btn btn-outline">
                More about us <span className="arw">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section cream">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>Eight reasons partners stay</h2>
            <p>
              Reliability is not a claim we make once. It is the outcome of how we source,
              how we mill, and how we handle every order that leaves Raichur.
            </p>
          </Reveal>

          <ul className="reasons">
            {reasons.map((r) => (
              <li key={r.no}>
                <span className="n">{r.no}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- PRODUCTS (INTERACTIVE FILTER & ESTIMATOR) ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Interactive Product Range</span>
            <h2>Explore Our Grain Products</h2>
            <p>
              Click any product card to launch the **Order Estimator &amp; Logistics Calculator**,
              or filter by category.
            </p>
          </Reveal>

          <ProductGridInteractive />

          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/products" className="btn">
              View all products <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- SOURCING ---------- */}
      <section className="section cream">
        <div className="shell split wide-left">
          <Reveal>
            <span className="eyebrow">Direct from the field</span>
            <h2>We buy our paddy where it grows</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Our paddy is bought directly from farmers across Raichur district. No intermediaries,
              no diluted chain &mdash; which is why we can vouch for what goes into the mill as
              confidently as for what comes out of it.
            </p>
            <p className="muted">
              Those relationships are the reason our grain profile stays consistent season after
              season, and the reason we can trace a consignment back to the fields it came from.
            </p>
          </Reveal>

          <Reveal>
            <Photo photo={photos.hand} ratio="4/2.9" />
          </Reveal>
        </div>
      </section>

      {/* ---------- QUALITY ---------- */}
      <section className="section dark">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Interactive Quality Explorer</span>
            <h2>Quality Process You Can Inspect</h2>
            <p>
              Hover or click each step below to inspect precise milling and purity parameters.
            </p>
          </Reveal>

          <ProcessSteps />
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>What our partners say</h2>
          </Reveal>

          <div className="grid g3">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <TiltCard className="tcard">
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.place}</span>
                  </figcaption>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Looking for premium quality rice products?"
        text="Whether you're a wholesaler, distributor, or business partner, we're here to serve your requirements with reliability and excellence."
      />
    </>
  );
}
