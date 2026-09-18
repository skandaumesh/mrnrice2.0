"use client";

import { useState } from "react";
import { company } from "@/lib/products";

/**
 * Same no-backend approach as the full enquiry form: the message is composed
 * into a mail draft and handed to the visitor's email client, so the drawer
 * never claims to have sent something it has not.
 */
export default function FloatingInquiry() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = [`Name: ${name}`, `Phone: ${phone}`, "", msg].join("\n");
    window.location.href =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(`Quick enquiry from ${name || "website"}`)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setOpen(false);
      setName("");
      setPhone("");
      setMsg("");
    }, 4000);
  };

  return (
    <div className="floating-inquiry-wrapper">
      {!open && (
        <button
          className="floating-pill"
          onClick={() => setOpen(true)}
          aria-label="Open quick enquiry"
        >
          <span className="pill-pulse" />
          <span>Quick Enquiry</span>
        </button>
      )}

      {open && (
        <div className="floating-drawer">
          <div className="drawer-header">
            <h4>Quick Enquiry</h4>
            <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close">
              &times;
            </button>
          </div>

          {sent ? (
            <div className="drawer-success">
              <span>&#10003; Opening your email app</span>
              <p>
                If nothing opens, write to us at {company.email} or call our sales team on{" "}
                {company.phones[0].number}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="drawer-form">
              <div className="field">
                <input
                  type="text"
                  placeholder="Your name or business"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="field">
                <textarea
                  placeholder="Which variety or quantity are you looking for?"
                  rows={3}
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: "100%" }}>
                Send Enquiry &rarr;
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
