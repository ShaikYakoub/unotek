"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import AboutHeroSection from "./components/AboutHeroSection";
import EnvironmentalThreatSection from "./components/EnvironmentalThreatSection";
import PlantBlueprintSection from "./components/PlantBlueprintSection";
import AboutCtaSection from "./components/AboutCtaSection";

export default function PremiumAboutPage() {
  const whatsappNumber = "9515168868";
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const problemOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    [1, 1, 0],
  );
  const solutionOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.6, 1],
    [0, 1, 1],
  );
  const solutionY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  return (
    <>
      <Navbar />
      <div className="font-sans text-slate-900 bg-white min-h-screen">
        <AboutHeroSection />
        <EnvironmentalThreatSection
          problemOpacity={problemOpacity}
          solutionOpacity={solutionOpacity}
          solutionY={solutionY}
          whatsappNumber={whatsappNumber}
          containerRef={containerRef}
        />
        <PlantBlueprintSection />
        <AboutCtaSection whatsappNumber={whatsappNumber} />
        <Footer />
      </div>
    </>
  );
}
