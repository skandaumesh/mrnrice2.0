"use client";

import { useState } from "react";
import TiltCard from "@/components/TiltCard";
import ProductModal from "@/components/ProductModal";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

const categories = [
  { id: "all", label: "All Products" },
  { id: "raw", label: "Raw Rice" },
  { id: "boiled", label: "Boiled Rice" },
  { id: "byproducts", label: "By-Products" }
];

export default function ProductGridInteractive() {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((p) => {
    if (filter === "all") return true;
    if (filter === "raw") return p.name.toLowerCase().includes("raw");
    if (filter === "boiled") return p.name.toLowerCase().includes("boiled") || p.name.toLowerCase().includes("steam");
    if (filter === "byproducts") return p.name.toLowerCase().includes("bran") || p.name.toLowerCase().includes("husk");
    return true;
  });

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="filter-tabs" role="tablist" aria-label="Filter products">
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
                <p>{p.short}</p>
                <span className="pcard-more">
                  Quick View &amp; Estimator <i>&rarr;</i>
                </span>
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
