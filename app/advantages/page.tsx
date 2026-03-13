"use client";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import AdvantagesHeroSection from "./components/AdvantagesHeroSection";
import AdvantagesComparisonSection from "./components/AdvantagesComparisonSection";
import AdvantagesAnatomySection from "./components/AdvantagesAnatomySection";
import CompressiveThermalSection from "./components/CompressiveThermalSection";
import AdvantagesCtaSection from "./components/AdvantagesCtaSection";

export default function PremiumAdvantagesPage() {
  const whatsappNumber = "9515168868";

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Navbar />
      <AdvantagesHeroSection />
      <AdvantagesComparisonSection />
      <AdvantagesAnatomySection />
      <CompressiveThermalSection />
      <AdvantagesCtaSection whatsappNumber={whatsappNumber} />
      <Footer />
    </div>
  );
}
