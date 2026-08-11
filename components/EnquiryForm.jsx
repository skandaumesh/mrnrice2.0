"use client";

import { useState } from "react";
import { products, company } from "@/lib/products";

/**
 * No backend yet: the enquiry is composed into a mail message and handed to
 * the visitor's email client. Swap `handleSubmit` for a fetch() when an
 * endpoint (Formspree, an API route, etc.) is available.
 */
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Product: ${data.get("product") || ""}`,
      `Quantity: ${data.get("quantity") || ""}`,
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
        Tell us what you need and our team will get back to you with availability and pricing.
      </p>

      <div className="frow">
        <div className="field">
          <label htmlFor="name">Your Name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company / Firm</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="phone">Phone Number *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="product">Product of Interest</label>
          <select id="product" name="product" defaultValue={products[0].name}>
            {products.map((p) => (
              <option key={p.slug}>{p.name}</option>
            ))}
            <option>Multiple / Not sure</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="quantity">Approximate Quantity</label>
          <input id="quantity" name="quantity" type="text" placeholder="e.g. 10 tons per month" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Your Requirement</label>
        <textarea
          id="message"
          name="message"
          placeholder="Delivery location, packing preference, timelines..."
        />
      </div>

      <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
        Submit Enquiry
      </button>

      <p className="form-note">By submitting, you agree to be contacted regarding your enquiry.</p>

      {sent && (
        <p className="form-status" role="status">
          Opening your email app with the enquiry details. If nothing opens, write to us directly at {company.email}.
        </p>
      )}
    </form>
  );
}
