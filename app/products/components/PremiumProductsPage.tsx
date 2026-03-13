"use client";

import React, { useState } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import ProductsHeroSection from "./ProductsHeroSection";
import ProductsDataSection from "./ProductsDataSection";
import ProductsCatalogSection from "./ProductsCatalogSection";
import ProductsCtaSection from "./ProductsCtaSection";

type BlockSize = "4 Inch" | "6 Inch" | "9 Inch";

export default function PremiumProductsPage() {
  const whatsappNumber = "9515168868";
  const [activeSize, setActiveSize] = useState<BlockSize>("6 Inch");

  const blockData = {
    "4 Inch": {
      dim: '24" x 8" x 4"',
      yield: 83,
      rate: "Rs.50-60",
      avg: "Rs.4500",
      previewHeight: 48,
      useCase: "Partition walls, utility cores, and low-load internal planning",
    },
    "6 Inch": {
      dim: '24" x 8" x 6"',
      yield: 55,
      rate: "Rs.75-85",
      avg: "Rs.4400",
      previewHeight: 72,
      useCase:
        "External walls for residential and commercial mid-rise projects",
    },
    "9 Inch": {
      dim: '24" x 8" x 9"',
      yield: 36,
      rate: "Rs.110-120",
      avg: "Rs.4150",
      previewHeight: 108,
      useCase:
        "Industrial, high-load, and high thermal-performance wall systems",
    },
  };

  return (
    <>
      <Navbar />
      <div className="font-sans text-slate-900 bg-white min-h-screen">
        <ProductsHeroSection />
        <ProductsDataSection
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          blockData={blockData}
        />
        <ProductsCatalogSection />
        <ProductsCtaSection whatsappNumber={whatsappNumber} />
      </div>
      <Footer />
    </>
  );
}
