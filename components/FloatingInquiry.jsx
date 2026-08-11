"use client";

import { useState } from "react";

export default function FloatingInquiry() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setOpen(false);
      setName("");
      setPhone("");
      setMsg("");
    }, 2500);
  };

  return (
    <div className="floating-inquiry-wrapper">
      {!open && (
        <button
          className="floating-pill"
          onClick={() => setOpen(true)}
          aria-label="Open Quick Inquiry"
        >
          <span className="pill-pulse" />
          <span>⚡ Quick Inquiry</span>
        </button>
      )}

      {open && (
        <div className="floating-drawer">
          <div className="drawer-header">
            <h4>Quick Inquiry &amp; Quote</h4>
            <button className="drawer-close" onClick={() => setOpen(false)}>
              &times;
            </button>
          </div>

          {sent ? (
            <div className="drawer-success">
              <span>✓ Message Received!</span>
              <p>Thank you! Our Raichur team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="drawer-form">
              <div className="field">
                <input
                  type="text"
                  placeholder="Your Name / Business"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="field">
                <textarea
                  placeholder="What product or requirement do you have?"
                  rows={3}
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: "100%" }}>
                Send Quick Request &rarr;
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
