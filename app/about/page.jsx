import Link from "next/link";
import Banner from "@/components/Banner";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import { reasons } from "@/lib/products";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "About Us",
  description:
    "Established in 2016, MRN Agro Industries operates a rice milling facility in Raichur, Karnataka, with an 8 tons per hour capacity and paddy sourced directly from local farmers."
};

const operations = [
  { title: "Sourcing", text: "Direct procurement from farmers across Raichur district, without intermediaries diluting the chain." },
  { title: "Processing", text: "A modern milling and processing facility with an installed capacity of 8 tons per hour." },
  { title: "Distribution", text: "Supplying households, wholesalers, distributors and industrial buyers on dependable schedules." }
];

export default function AboutPage() {
  return (
    <>
      <Banner crumb="About us" title="About MRN Agro Industries" photo={photos.field}>
        A rice milling and processing company from Raichur, Karnataka, working directly with
        farmers since 2016.
      </Banner>

      {/* ---------- STORY ---------- */}
      <section className="section">
        <div className="shell split wide-right">
          <Reveal>
            <Photo photo={photos.harvest} ratio="4/4.4" />
          </Reveal>

          <Reveal>
            <span className="eyebrow">Our story</span>
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
              <li>Commitment to quality, consistency and customer satisfaction</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- FACTS ---------- */}
      <section className="section cream" style={{ paddingBlock: "clamp(38px,4.5vw,58px)" }}>
        <div className="shell hero-meta" style={{ marginTop: 0, paddingTop: 0, border: 0, gap: "clamp(24px,5vw,64px)" }}>
          <div>
            <b><Counter value={2016} plain /></b>
            <span>Year established</span>
          </div>
          <div>
            <b><Counter value={8} /> <i>tons / hour</i></b>
            <span>Milling capacity</span>
          </div>
          <div>
            <b><Counter value={4} /> <i>products</i></b>
            <span>Product range</span>
          </div>
          <div>
            <b>Raichur</b>
            <span>Karnataka, India</span>
          </div>
        </div>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Mission &amp; vision</span>
            <h2>What drives us forward</h2>
          </Reveal>

          <div className="grid g2">
            <Reveal className="mv">
              <span className="rule" />
              <h3>Our mission</h3>
              <p className="muted">
                To deliver premium-quality rice products through ethical sourcing, advanced
                processing techniques, and unwavering commitment to customer satisfaction while
                supporting the agricultural communities that form the foundation of our business.
              </p>
            </Reveal>

            <Reveal className="mv dark">
              <span className="rule" />
              <h3>Our vision</h3>
              <p>
                To become one of India&rsquo;s most trusted and preferred rice processing companies by
                setting benchmarks in quality, sustainability, and innovation while creating lasting
                value for farmers, customers, and communities.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section cream">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>Eight reasons partners stay</h2>
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

      {/* ---------- OPERATIONS ---------- */}
      <section className="section">
        <div className="shell split wide-left">
          <Reveal>
            <span className="eyebrow">Our operations</span>
            <h2>From the field to the facility</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Our operations are built around two priorities: fair, direct relationships with the
              farmers who grow our paddy, and a processing line that treats every consignment to the
              same standard.
            </p>
            <p className="muted">
              Paddy moves through selection, milling, quality checks and packaging within our own
              facility, so quality is verified at every stage rather than assumed.
            </p>
            <div className="btn-row" style={{ marginTop: 26 }}>
              <Link href="/products" className="btn btn-outline">
                See what we produce <span className="arw">&rarr;</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid" style={{ gap: 14 }}>
            {operations.map((o) => (
              <Reveal key={o.title} className="card">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROMISE ---------- */}
      <section className="section dark">
        <div className="shell promise">
          <Reveal>
            <Photo photo={photos.table} ratio="4/3.4" />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Our promise</span>
            <blockquote>
              At MRN Agro Industries, we believe that quality begins long before processing. It
              starts with our relationships&mdash;with farmers, with our customers, and with the
              communities we serve. By combining responsible sourcing practices with efficient
              milling processes, we strive to deliver products that embody purity, consistency,
              and trust.
            </blockquote>
            <p className="sign">MRN Agro Industries &middot; Raichur, Karnataka</p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Work with us"
        text="Whether you're a wholesaler, distributor, or business partner, we're here to serve your requirements with reliability and excellence."
      />
    </>
  );
}
