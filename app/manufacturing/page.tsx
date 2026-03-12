"use client";

import React from "react";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import ManufacturingHeroSection from "./components/ManufacturingHeroSection";
import ManufacturingTimelineSection from "./components/ManufacturingTimelineSection";
import ManufacturingCtaSection from "./components/ManufacturingCtaSection";

export default function PremiumProcessPage() {
  const whatsappNumber = "9515168868";

  const processSteps = [
    {
      id: 1,
      phaseName: "Phase 1 - Raw Material Handling",
      title: "1. Coal Fly Ash",
      desc: "The coal fly ash will be sent to the slurry preparing pond by wheel loader to be prepared into the required concentration coal fly ash slurry by adding rated water, which will be pumped into a slurry tank to be stored and ready to be used.",
    },
    {
      id: 2,
      phaseName: "Phase 1 - Raw Material Handling",
      title: "2. Lime",
      desc: "The powder will be sent into the lime powder silo for storage and ready to be used by bucket elevator, after coming into the factory.",
    },
    {
      id: 3,
      phaseName: "Phase 1 - Raw Material Handling",
      title: "3. Gypsum",
      desc: "The gypsum in the storage shed will be added into the slurry pond according to the required proportion, while preparing slurry.",
    },
    {
      id: 4,
      phaseName: "Phase 1 - Raw Material Handling",
      title: "4. Cement",
      desc: "The cement will be transported into the factory by tank truck and directly is pumped into the cement silo to be used.",
    },
    {
      id: 5,
      phaseName: "Phase 1 - Raw Material Handling",
      title: "5. Aluminium Powder",
      desc: "The purchased aluminium powder paste in the bucket or bag will be stored in its storehouse. When being used, it will be lifted to the second floor of the batching building, then measured and added into the aluminium mixer to prepare 5% suspending liquid to be used.",
    },
    {
      id: 6,
      phaseName: "Phase 2 - Recovery & Recycling",
      title: "6. Waste & Scrape Slurry",
      desc: "The cleaning waste water under the casting machine will be pumped to the ball mill to be used as grinding water. The scrape from the cutting machine will be prepared to slurry and pumped into the waste slurry tank to be used.",
    },
    {
      id: 7,
      phaseName: "Phase 3 - Batching & Casting",
      title: "7. Batching, Mixing and Casting",
      desc: "Coal fly ash will be sent to the electronic scale in the batching building by pump. Lime and cement are sent by single screw conveyer. Aluminium powder is measured manually and prepared as a suspending liquid for each mould. The slurry temperature should arrive at the required process temperature before casting.",
    },
    {
      id: 8,
      phaseName: "Phase 4 - Cutting & Grouping",
      title: "8. Cutting and Grouping",
      desc: "After pre-curing, the green block arrives at the required strength. The crane takes it to the cutting machine section. After removing the mould, the green block is cut according to the required size and moved to the curing trolley in front of the autoclave for grouping.",
    },
    {
      id: 9,
      phaseName: "Phase 5 - Autoclaving & Finishing",
      title: "9. Autoclaved and Finished Product",
      desc: "The green block, after grouping, will be moved into the autoclave by windlass for curing. The whole curing period is approx. 12h, pressure approx. 1.2Mpa, temperature approx. 185°C.",
    },
    {
      id: 10,
      phaseName: "Phase 5 - Autoclaving & Finishing",
      title: "10. Bottom Plate Returning & Oiling",
      desc: "After unloading, the side plate on the trolley will be lifted to the returning rail by crane, returned to the side of the cutting machine, combined with the mould, and sent to the mould returning line for cleaning and oiling to be reused.",
    },
  ];

  const stepMedia: Record<number, { type: string; src: string }> = {
    1: {
      type: "video",
      src: "/homepage/videos/fly-ash-slurry-and-lime-blending.webm",
    },
    2: { type: "video", src: "/manufacturing/videos/slurry-mixing.webm" },
    3: { type: "video", src: "/homepage/videos/mold-filling-with-slurry.webm" },
    4: { type: "video", src: "/manufacturing/videos/factory-overview.webm" },
    5: { type: "video", src: "/manufacturing/videos/slurry-mixing.webm" },
    6: { type: "video", src: "/homepage/videos/drone-shot-of-warehouse.webm" },
    7: { type: "video", src: "/homepage/videos/mold-filling-with-slurry.webm" },
    8: { type: "video", src: "/manufacturing/videos/block-grouping.webm" },
    9: { type: "video", src: "/manufacturing/videos/autoclave-curing.webm" },
    10: { type: "video", src: "/homepage/videos/aac-cake-cutting.webm" },
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Navbar />
      <ManufacturingHeroSection />

      <div className="max-w-5xl w-full mx-auto text-center px-6 mb-12 mt-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Process Workflow Cards
        </h2>
        <p className="text-slate-500 font-light">
          Each stage is shown with its own media clip and process summary.
        </p>
      </div>

      <ManufacturingTimelineSection
        processSteps={processSteps}
        stepMedia={stepMedia}
      />
      <ManufacturingCtaSection whatsappNumber={whatsappNumber} />
      <Footer />
    </div>
  );
}
