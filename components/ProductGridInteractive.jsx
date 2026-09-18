"use client";

import { useState } from "react";
import TiltCard from "@/components/TiltCard";
import ProductModal from "@/components/ProductModal";
import Reveal from "@/components/Reveal";
import { products, packSizes } from "@/lib/products";

const categories = [
  { id: "all", label: "All Varieties" },
  { id: "raw", label: "Raw Rice" },
  { id: "steam", label: "Steam Rice" }
];

/**
 * `showFilter` hides the category tabs where they would duplicate other
 * navigation. `showDetailsLink` adds a second link on each card to that
 * variety's detail row further down the page.
 *
 * Both are plain booleans on purpose: this is a client component, so a
 * server page cannot hand it a function to build the href with.
 */
export default function ProductGridInteractive({ showFilter = true, showDetailsLink = false }) {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <>
      {/* Category Filter Tabs */}
      {showFilter && (
        <div className="filter-tabs" role="tablist" aria-label="Filter rice varieties">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              className={`filter-tab${filter === c.id ? " active" : ""}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* Product Cards Grid with 3D Tilt */}
      <div className="grid g4 product-animated-grid">
        {filteredProducts.map((p) => (
          <Reveal key={p.slug}>
            <TiltCard
              className="pcard"
              style={{ height: "100%" }}
              onClick={() => setSelectedProduct(p)}
            >
              <div className="pcard-media">
                <img src={p.image} alt={`${p.name} pack`} loading="lazy" />
              </div>
              <div className="pcard-body">
                <span className="pcard-no">{p.no}</span>
                <h3>{p.name}</h3>
                <span className="pcard-variety">{p.variety}</span>
                <p>{p.short}</p>

                <ul className="packs" aria-label="Pack sizes">
                  {packSizes.map((kg) => (
                    <li key={kg}>{kg} kg</li>
                  ))}
                </ul>

                <span className="pcard-more">
                  Quick View &amp; Pack Estimator <i>&rarr;</i>
                </span>

                {showDetailsLink && (
                  <a
                    className="pcard-details"
                    href={`#${p.slug}`}
                    /* the card itself opens the modal, so keep this link separate */
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read full details
                  </a>
                )}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
