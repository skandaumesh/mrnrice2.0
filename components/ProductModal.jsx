"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductModal({ product, onClose }) {
  const [tons, setTons] = useState(10);
  const [bagSize, setBagSize] = useState(25); // kg per bag
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!product) return null;

  const totalKg = tons * 1000;
  const bagCount = Math.ceil(totalKg / bagSize);
  const container20ft = (tons / 24).toFixed(1); // avg ~24MT per 20ft container

  const handleCopyQuote = () => {
    const text = `Inquiry for ${product.name}: ${tons} Metric Tons (${bagCount} bags of ${bagSize}kg).`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-grid">
          <div className="modal-media">
            <img src={product.image} alt={product.name} />
            <span className="modal-badge">{product.no}</span>
          </div>

          <div className="modal-body">
            <span className="eyebrow">Quick Product View</span>
            <h2>{product.name}</h2>
            <p className="lede">{product.desc || product.short}</p>

            {/* Interactive Quantity & Logistics Calculator */}
            <div className="calc-box">
              <h4>⚡ Order Estimator & Logistics Calculator</h4>
              <div className="calc-controls">
                <div className="calc-field">
                  <label>Metric Tons (MT):</label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={tons}
                    onChange={(e) => setTons(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div className="calc-field">
                  <label>Bag Packaging:</label>
                  <select value={bagSize} onChange={(e) => setBagSize(parseInt(e.target.value))}>
                    <option value={25}>25 kg Bags</option>
                    <option value={50}>50 kg Bags</option>
                    <option value={10}>10 kg Retail Bags</option>
                  </select>
                </div>
              </div>

              <div className="calc-results">
                <div>
                  <strong>{bagCount.toLocaleString()}</strong>
                  <span>Total Bags</span>
                </div>
                <div>
                  <strong>{container20ft}</strong>
                  <span>20ft Containers (~24MT)</span>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <Link href={`/contact?product=${encodeURIComponent(product.name)}&tons=${tons}`} className="btn btn-gold">
                Request Official Quote &rarr;
              </Link>
              <button className="btn btn-outline" onClick={handleCopyQuote}>
                {copied ? "✓ Copied Inquiry" : "Copy Spec Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
