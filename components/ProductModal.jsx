"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { packSizes } from "@/lib/products";

const BULK = "bulk";

export default function ProductModal({ product, onClose }) {
  const [packSize, setPackSize] = useState(packSizes[1]); // 10 kg
  const [quantity, setQuantity] = useState(20);
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

  const isBulk = packSize === BULK;

  // In pack mode the quantity is a number of packs; in bulk mode it is tonnes.
  const totalKg = isBulk ? quantity * 1000 : quantity * packSize;
  const tonnes = totalKg / 1000;

  const summary = isBulk
    ? `${quantity} tonne${quantity === 1 ? "" : "s"} of ${product.name} (${product.variety}) in bulk packaging.`
    : `${quantity} × ${packSize} kg packs of ${product.name} (${product.variety}) — ${totalKg.toLocaleString("en-IN")} kg in total.`;

  const handleCopyQuote = async () => {
    try {
      await navigator.clipboard.writeText(`Enquiry: ${summary}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      /* clipboard unavailable (insecure origin or denied) — leave the label alone */
    }
  };

  const quoteHref =
    `/contact?product=${encodeURIComponent(product.name)}` +
    `&quantity=${encodeURIComponent(
      isBulk ? `${quantity} tonnes (bulk)` : `${quantity} x ${packSize} kg packs`
    )}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-grid">
          <div className="modal-media">
            <img src={product.image} alt={`${product.name} pack`} />
            <span className="modal-badge">{product.no}</span>
          </div>

          <div className="modal-body">
            <span className="eyebrow">{product.categoryLabel}</span>
            <h2>{product.name}</h2>
            <p className="modal-variety">{product.variety}</p>
            <p className="lede">{product.description}</p>

            <ul className="tags">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {/* Interactive Pack & Quantity Estimator */}
            <div className="calc-box">
              <h4>Pack &amp; Quantity Estimator</h4>
              <div className="calc-controls">
                <div className="calc-field">
                  <label htmlFor="calc-pack">Packaging</label>
                  <select
                    id="calc-pack"
                    value={packSize}
                    onChange={(e) => {
                      const v = e.target.value;
                      setPackSize(v === BULK ? BULK : Number(v));
                      setQuantity(v === BULK ? 1 : 20);
                    }}
                  >
                    {packSizes.map((kg) => (
                      <option key={kg} value={kg}>{kg} kg packs</option>
                    ))}
                    <option value={BULK}>Bulk packaging</option>
                  </select>
                </div>
                <div className="calc-field">
                  <label htmlFor="calc-qty">
                    {isBulk ? "Quantity (tonnes)" : "Number of packs"}
                  </label>
                  <input
                    id="calc-qty"
                    type="number"
                    min="1"
                    max={isBulk ? 500 : 10000}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
                    }
                  />
                </div>
              </div>

              <div className="calc-results">
                <div>
                  <strong>{totalKg.toLocaleString("en-IN")}</strong>
                  <span>Total kilograms</span>
                </div>
                <div>
                  <strong>{tonnes.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</strong>
                  <span>Total tonnes</span>
                </div>
              </div>

              <p className="calc-note">
                An indicative estimate to help you frame an enquiry. Our sales team confirms
                availability, current pricing and delivery arrangements.
              </p>
            </div>

            <div className="modal-actions">
              <Link href={quoteHref} className="btn btn-gold">
                Enquire about this variety <span className="arw">&rarr;</span>
              </Link>
              <button className="btn btn-outline" onClick={handleCopyQuote}>
                {copied ? "✓ Copied" : "Copy enquiry details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
