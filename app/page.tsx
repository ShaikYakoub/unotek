"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import AdvancedEstimationEngine from "./home/components/AdvancedEstimationEngine";
import AnatomyOfBlock from "./home/components/AnatomyOfBlock";
import ProjectGallery from "./home/components/ProjectGallery";
import HomeHeroSection from "./home/components/HomeHeroSection";
import TrustStripSection from "./home/components/TrustStripSection";
import HomeProcessSection from "./home/components/HomeProcessSection";
import ScaleSection from "./home/components/ScaleSection";
import EngineerTrustSection from "./home/components/EngineerTrustSection";
import IngredientsSection from "./home/components/IngredientsSection";
import HomeCtaSection from "./home/components/HomeCtaSection";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";

const processSteps = [
  {
    num: "01",
    title: "Precision Blending",
    desc: "AAC is produced out of a precise mix of pulverized fly ash, lime, cement, gypsum, water, and aluminium. The chemical reaction from the aluminium paste provides the distinct porous structure and lightness.",
    video: "/homepage/videos/fly-ash-slurry-and-lime-blending.webm",
    imageRight: false,
  },
  {
    num: "02",
    title: "Mould Casting",
    desc: "The homogeneous slurry is poured into precision steel moulds in controlled volumes. The aluminium reacts to generate hydrogen, causing the mix to rise and form millions of uniformly distributed micro-pores throughout the block.",
    video: "/homepage/videos/mould-casting.webm",
    imageRight: true,
  },
  {
    num: "03",
    title: "Wire-Cut Dimensioning",
    desc: "Once the green cake has partially set, a taut stainless-steel wire array slices it with sub-millimetre precision into dimensionally accurate blocks — eliminating the mortar waste associated with conventional brickwork.",
    video: "/homepage/videos/aac-cake-cutting.webm",
    imageRight: false,
  },
  {
    num: "04",
    title: "Autoclaved Curing",
    desc: "Block hardness is achieved by cement strength and an instant curing mechanism by autoclaving. The blocks are hardened by steam-curing in pressurised autoclaves at 180 °C, resulting in a high-insulating, Grade A building product.",
    video: "/homepage/videos/autoclaved-curing.webm",
    imageRight: true,
  },
];

export default function PremiumAACWebsite() {
  const whatsappNumber = "9515168868";
  const whatsappBase = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20procuring%20premium%20AAC%20blocks%20for%20an%20upcoming%20project.`;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="font-sans text-slate-900 bg-[#F8F9FA] min-h-screen selection:bg-blue-200">
      <Navbar />
      <HomeHeroSection
        whatsappBase={whatsappBase}
        heroRef={heroRef}
        heroImageY={heroImageY}
      />
      <TrustStripSection />
      <HomeProcessSection processSteps={processSteps} />
      <ScaleSection />

      <section id="anatomy" className="py-20 md:py-32 bg-slate-900 text-white">
        <AnatomyOfBlock />
      </section>

      <EngineerTrustSection whatsappBase={whatsappBase} />
      <IngredientsSection />

      <section id="projects" className="py-16 md:py-24 bg-white">
        <ProjectGallery whatsappLink={whatsappBase} />
      </section>

      <section id="calculator" className="py-14 md:py-24 bg-[#F8F9FA]">
        <AdvancedEstimationEngine whatsappLink={whatsappBase} />
      </section>

      <HomeCtaSection whatsappBase={whatsappBase} />
      <Footer />
    </div>
  );
}
