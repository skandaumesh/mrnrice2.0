import Link from "next/link";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import ProcessSteps from "@/components/ProcessSteps";
import CTA from "@/components/CTA";
import { products } from "@/lib/products";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Products",
  description:
    "Raw rice, boiled rice, rice bran and rice husk processed at the MRN Agro Industries facility in Raichur, Karnataka for households, wholesalers, distributors and industrial buyers."
};

const buyers = [
  { title: "Households", text: "Branded retail packs for everyday kitchens." },
  { title: "Wholesalers", text: "Bulk quantities at consistent quality and dependable timelines." },
  { title: "Distributors", text: "Regular supply schedules that support onward distribution." },
  { title: "Industrial buyers", text: "Bran and husk supplied in volume to processing units." }
];

export default function ProductsPage() {
  return (
    <>
      <Banner crumb="Products" title="Our products" photo={photos.raw}>
        We offer a carefully curated range of agricultural products processed with uncompromising
        attention to quality, ensuring they meet the diverse requirements of households,
        wholesalers, distributors, and industrial buyers.
      </Banner>

      {/* ---------- QUICK GRID ---------- */}
      <section className="section">
        <div className="shell grid g4">
          {products.map((p, i) => (
            <Reveal key={p.slug} >
              <a href={`#${p.slug}`} className="pcard" style={{ height: "100%" }}>
                <div className="pcard-media">
                  <img src={p.image} alt={`${p.name} pack`} />
                </div>
                <div className="pcard-body">
                  <span className="pcard-no">{p.no}</span>
                  <h3>{p.name}</h3>
                  <p>{p.short}</p>
                  <span className="pcard-more">Read more <i>&rarr;</i></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- DETAIL ROWS ---------- */}
      <section className="section cream" style={{ paddingTop: 0 }}>
        <div className="shell">
          {products.map((p) => (
            <Reveal key={p.slug} as="article" className="prow" id={p.slug} style={{ scrollMarginTop: 90 }}>
              <div className="prow-media">
                <img src={p.image} alt={`${p.name} pack`} />
              </div>

              <div>
                <span className="prow-no">Product {p.no}</span>
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <p className="muted">{p.note}</p>

                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <dl className="specs">
                  {p.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="btn-row" style={{ marginTop: 24 }}>
                  <Link href="/contact" className="btn btn-outline">
                    Enquire about {p.name} <span className="arw">&rarr;</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- QUALITY PROMISE ---------- */}
      <section className="section dark">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Quality promise</span>
            <h2>Quality you can trust</h2>
            <p>
              Every grain that leaves our facility undergoes careful processing to preserve its
              quality, purity, and nutritional value. Our dedication to maintaining high standards
              enables us to serve customers with products they can consistently rely on.
            </p>
          </Reveal>

          <ProcessSteps />
        </div>
      </section>

      {/* ---------- WHO WE SUPPLY ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">Who we supply</span>
            <h2>Serving every scale of requirement</h2>
          </Reveal>

          <div className="grid g4">
            {buyers.map((b, i) => (
              <Reveal key={b.title} className="card">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Request a quote"
        text="Tell us the product, quantity and delivery location, and our team will get back to you with pricing and availability."
        label="Send an enquiry"
      />
    </>
  );
}
