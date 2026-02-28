"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  CheckCircle2,
  Factory,
  Gauge,
  Thermometer,
  Clock,
} from "lucide-react";

export default function PremiumProcessPage() {
  const whatsappNumber = "YOUR_CLIENT_NUMBER";
  const [activePhase, setActivePhase] = useState<number>(1);

  // The comprehensive 10-step process extracted directly from the engineering report
  const processSteps = [
    {
      id: 1,
      phase: 1,
      title: "1. Coal Fly Ash",
      desc: "The coal fly ash will be sent to the slurry preparing pond by wheel loader to be prepared into the required concentration coal fly ash slurry by adding rated water, which will be pumped into a slurry tank to be stored and ready to be used [cite: 115-116].",
    },
    {
      id: 2,
      phase: 1,
      title: "2. Lime",
      desc: "The powder will be sent into the lime powder silo for storage and ready to be used by bucket elevator, after coming into the factory [cite: 117-118].",
    },
    {
      id: 3,
      phase: 1,
      title: "3. Gypsum",
      desc: "The gypsum in the storage shed will be added into the slurry pond according to the required proportion, while preparing slurry [cite: 119-120].",
    },
    {
      id: 4,
      phase: 1,
      title: "4. Cement",
      desc: "The cement will be transported into the factory by tank truck and directly is pumped into the cement silo to be used [cite: 121-122].",
    },
    {
      id: 5,
      phase: 1,
      title: "5. Aluminium Powder",
      desc: "The purchased aluminium powder paste in the bucket or bag will be stored in its storehouse. [cite_start]When being used, it will be lifted to the second floor of the batching building, then measured and added into the aluminium mixer to prepare 5% suspending liquid to be used [cite: 123-124].",
    },
    {
      id: 6,
      phase: 2,
      title: "6. Waste & Scrape Slurry",
      desc: "The cleaning waste water under the casting machine will be pumped to the ball mill to be used as grinding water. [cite_start]The scrape from the cutting machine will be prepared to slurry and pumped into the waste slurry tank to be used [cite: 125-127].",
    },
    {
      id: 7,
      phase: 2,
      title: "7. Batching, Mixing and Casting",
      desc: "Coal fly ash will be sent to the electronic scale in the batching building by pump. Lime and cement are sent by single screw conveyer. Aluminium powder is measured manually and prepared as a suspending liquid for each mould. [cite_start]The slurry temperature should arrive at the required process temperature before casting, and the mould will be moved to the bottom of the casting mixer by ferry car [cite: 128-137].",
    },
    {
      id: 8,
      phase: 3,
      title: "8. Cutting and Grouping",
      desc: "After pre-curing, the green block arrives at the required strength. The crane takes it to the cutting machine section. After removing the mould, the green block is cut according to the required size and moved to the curing trolley in front of the autoclave for grouping. [cite_start]There are seven trolleys for each autoclave with 14 pieces of green block [cite: 138-142].",
    },
    {
      id: 9,
      phase: 4,
      title: "9. Autoclaved and Finished Product",
      desc: "The green block, after grouping, will be moved into the autoclave by windlass for curing. The whole curing period is approx. 12h, pressure approx. 1.2Mpa, temperature approx. 185°C. [cite_start]After curing, the product will be pulled out of the autoclave and sent to the store yard [cite: 143-146].",
    },
    {
      id: 10,
      phase: 4,
      title: "10. Bottom Plate Returning & Oiling",
      desc: "After unloading, the side plate on the trolley will be lifted to the returning rail by crane, returned to the side of the cutting machine, combined with the mould, and sent to the mould returning line for cleaning and oiling to be reused [cite: 147-148].",
    },
  ];

  // Helper to determine which video to show based on the active phase
  const getVideoForPhase = (phase: number) => {
    switch (phase) {
      case 1:
        return "/manufacturing/videos/video-materials.mp4"; // 🎬 Prompt: Top-down macro of raw materials being sorted
      case 2:
        return "/manufacturing/videos/video-mixing.mp4"; // 🎬 Prompt: High-speed industrial mixing of slurry
      case 3:
        return "/manufacturing/videos/video-cutting.mp4"; // 🎬 Prompt: Precision wire cutting the green block
      case 4:
        return "/manufacturing/videos/video-autoclave.mp4"; // 🎬 Prompt: Steam venting from massive industrial autoclave
      default:
        return "/manufacturing/videos/video-materials.mp4";
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen pt-24 pb-20">
      {/* --- HERO: THE FACTORY FLOOR --- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Settings size={18} /> Production Infrastructure
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            The 10-Step <br /> Manufacturing Standard.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            A state-of-the-art, fully automated process engineered for absolute
            uniformity, zero wastage, and maximum structural integrity.
          </p>
        </motion.div>
      </section>

      {/* --- CINEMATIC SCROLL-JACKING TIMELINE --- */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: The 10 Steps (Scrollable) */}
          <div className="lg:w-1/2 space-y-8 pb-32">
            <div className="border-l-2 border-slate-100 pl-8 mt-12 space-y-16">
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  onViewportEnter={() => setActivePhase(step.phase)}
                  transition={{ duration: 0.5 }}
                  className={`relative transition-all duration-500 ${activePhase === step.phase ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[41px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors duration-500 ${activePhase === step.phase ? "bg-blue-600" : "bg-slate-300"}`}
                  ></div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Micro-Interaction for Autoclave Phase */}
                  {step.id === 9 && (
                    <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg group cursor-crosshair hover:border-blue-500 transition-colors">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                        <Factory size={16} /> Autoclave Telemetry
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center text-center">
                          <Clock
                            className="text-blue-600 mb-2 group-hover:animate-pulse"
                            size={24}
                          />
                          <span className="text-xl font-black text-slate-900">
                            12h
                          </span>
                          <span className="text-xs text-slate-500 uppercase">
                            Curing
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center border-l border-r border-slate-100 px-2">
                          <Gauge
                            className="text-blue-600 mb-2 group-hover:rotate-45 transition-transform duration-700"
                            size={24}
                          />
                          <span className="text-xl font-black text-slate-900">
                            1.2<span className="text-sm">Mpa</span>
                          </span>
                          <span className="text-xs text-slate-500 uppercase">
                            Pressure
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <Thermometer
                            className="text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-500"
                            size={24}
                          />
                          <span className="text-xl font-black text-slate-900">
                            185°C
                          </span>
                          <span className="text-xs text-slate-500 uppercase">
                            Temp
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Pinned Cinematic Video Frame */}
          <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-32 h-[600px] z-10">
            <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
              {/* Animated Video Crossfader */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                  >
                    <source
                      src={getVideoForPhase(activePhase)}
                      type="video/mp4"
                    />
                  </video>
                </motion.div>
              </AnimatePresence>

              {/* Live Phase Indicator Overlay */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-3 z-20">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-black text-slate-900 uppercase tracking-widest">
                  Phase 0{activePhase} Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCUREMENT CTA --- */}
      <section className="py-24 bg-slate-50 text-center px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
            Ready to Procure Enterprise-Grade Blocks?
          </h2>
          <p className="text-xl text-slate-500 mb-10 font-light">
            Our 10-step precision manufacturing guarantees absolute consistency
            across bulk orders.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%2010-step%20manufacturing%20process%20and%20would%20like%20to%20discuss%20a%20bulk%20order.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-5 px-10 rounded-full text-lg shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            <CheckCircle2 size={24} />
            Initialize Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
