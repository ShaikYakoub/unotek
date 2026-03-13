"use client";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import AboutHeroSection from "./components/AboutHeroSection";
import EnvironmentalThreatSection from "./components/EnvironmentalThreatSection";
import PlantBlueprintSection from "./components/PlantBlueprintSection";
import AboutCtaSection from "./components/AboutCtaSection";

export default function PremiumAboutPage() {
  const whatsappNumber = "9515168868";

  return (
    <>
      <Navbar />
      <div className="font-sans text-slate-900 bg-white min-h-screen">
        <AboutHeroSection />
        <EnvironmentalThreatSection whatsappNumber={whatsappNumber} />
        <PlantBlueprintSection />
        <AboutCtaSection whatsappNumber={whatsappNumber} />
        <Footer />
      </div>
    </>
  );
}
