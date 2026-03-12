"use client";

import React, { useState } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import TechnicalHeroSection from "./TechnicalHeroSection";
import TechnicalDataSection from "./TechnicalDataSection";
import TechnicalCtaSection from "./TechnicalCtaSection";

type BlockSize = "4 Inch" | "6 Inch" | "9 Inch";

export default function PremiumTechnicalPage() {
  const whatsappNumber = "9515168868";
  const [activeSize, setActiveSize] = useState<BlockSize>("6 Inch");

  const blockData = {
    "4 Inch": {
      dim: '24" x 8" x 4"',
      yield: 83,
      rate: "Rs.50-60",
      avg: "Rs.4500",
      depthScale: 0.4,
    },
    "6 Inch": {
      dim: '24" x 8" x 6"',
      yield: 55,
      rate: "Rs.75-85",
      avg: "Rs.4400",
      depthScale: 0.6,
    },
    "9 Inch": {
      dim: '24" x 8" x 9"',
      yield: 36,
      rate: "Rs.110-120",
      avg: "Rs.4150",
      depthScale: 0.9,
    },
  };

  return (
    <>
      <Navbar />
      <div className="font-sans text-slate-900 bg-white min-h-screen">
        <TechnicalHeroSection />
        <TechnicalDataSection
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          blockData={blockData}
        />
        <TechnicalCtaSection whatsappNumber={whatsappNumber} />
      </div>
      <Footer />
    </>
  );
}
