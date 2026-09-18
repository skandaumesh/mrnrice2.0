"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, customerTypes, company } from "@/lib/products";

/**
 * No backend yet: the enquiry is composed into a mail message and handed to
 * the visitor's email client. Swap `handleSubmit` for a fetch() when an
 * endpoint (Formspree, an API route, etc.) is available.
 *
 * Product and quantity are prefilled from the query string, so the "Enquire
 * about this variety" links on the products page and in the quick-view modal
 * arrive with the context already filled in.
 */
export default function EnquiryForm() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);

  const presetProduct = params.get("product") || "";
  const presetQuantity = params.get("quantity") || "";
  const knownProduct = products.find((p) => p.name === presetProduct);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `City and State: ${data.get("location") || ""}`,
      `Customer type: ${data.get("customerType") || ""}`,
      `Rice variety: ${data.get("product") || ""}`,
      `Quantity required: ${data.get("quantity") || ""}`,
      "",
      String(data.get("message") || "")
    ].join("\n");

    window.location.href =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(`Enquiry from ${data.get("name") || "website"}`)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2 style={{ fontSize: "1.45rem" }}>Send an Enquiry</h2>
      <p className="muted" style={{ margin: "10px 0 24px", fontSize: ".94rem" }}>
        Tell us what you are looking for, and our team will help you with product and
        supply information.
      </p>

      <div className="frow">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="email">Email <span className="opt">(optional)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="location">City and State</label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Hyderabad, Telangana"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="customerType">Customer type</label>
          <select id="customerType" name="customerType" defaultValue={customerTypes[0]}>
            {customerTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="product">Rice variety</label>
          <select
            id="product"
            name="product"
            defaultValue={knownProduct ? knownProduct.name : "Not sure yet"}
          >
            {products.map((p) => (
              <option key={p.slug}>{p.name}</option>
            ))}
            <option>Multiple varieties</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="quantity">Quantity required</label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          defaultValue={presetQuantity}
          placeholder="e.g. 50 packs of 26 kg, or 5 tonnes in bulk"
        />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Delivery location, packaging preference, timelines..."
        />
      </div>

      <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
        Send Enquiry
      </button>

      <p className="form-note">By submitting, you agree to be contacted regarding your enquiry.</p>

      {sent && (
        <p className="form-status" role="status">
          Opening your email app with the enquiry details. If nothing opens, write to us
          directly at {company.email}.
        </p>
      )}
    </form>
  );
}
