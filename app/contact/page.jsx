import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import CTA from "@/components/CTA";
import { company } from "@/lib/products";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Contact us",
  description:
    "Contact MRN Agro Industries in Raichur, Karnataka for raw rice, boiled rice, rice bran and rice husk enquiries from wholesalers, distributors and industrial buyers."
};

const icons = {
  pin: <><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  phone: <path d="M4.5 5.5c0 8 6 14 14 14l1.5-3-4-2-2 2a13 13 0 0 1-6.5-6.5l2-2-2-4-3 1.5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>
};

function Icon({ name }) {
  return (
    <span className="info-ico">
      <svg viewBox="0 0 24 24">{icons[name]}</svg>
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <Banner crumb="Contact us" title="Contact us" photo={photos.field}>
        Whether you&rsquo;re a wholesaler, distributor, or business partner, we&rsquo;re here to serve your
        requirements with reliability and excellence.
      </Banner>

      <section className="section">
        <div className="shell contact-grid">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2>We&rsquo;d Be Glad to Hear From You</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              Reach us during working hours for product availability, pricing and delivery
              timelines. For bulk requirements, sharing your quantity and location helps us
              respond faster.
            </p>

            <ul className="info" style={{ marginTop: 28 }}>
              <li>
                <Icon name="pin" />
                <div>
                  <h3>Factory &amp; office</h3>
                  <p>{company.name}<br />{company.city}, {company.state}, India</p>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <h3>Phone</h3>
                  <p><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></p>
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <h3>Email</h3>
                  <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                </div>
              </li>
              <li>
                <Icon name="clock" />
                <div>
                  <h3>Working hours</h3>
                  <p>{company.hours}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal >
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="section cream" style={{ paddingTop: 0, background: "transparent" }}>
        <Reveal className="shell">
          <div className="map">
            <p>
              Map placeholder &mdash; paste your Google Maps embed here.<br />
              (Google Maps &rarr; Share &rarr; Embed a map &rarr; copy the &lt;iframe&gt;.)
            </p>
          </div>
        </Reveal>
      </section>

      <CTA
        title="Looking for premium quality rice products?"
        text="Share your requirement and we'll respond with availability, pricing and delivery timelines."
        label="Email us directly"
        href={`mailto:${company.email}`}
      />
    </>
  );
}
