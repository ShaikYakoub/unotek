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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PremiumProcessPage() {
  const whatsappNumber = "919876543210";
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [activePhase, setActivePhase] = useState<number>(1);

  // The comprehensive 10-step process extracted directly from the engineering report
  const processSteps = [
    {
      id: 1,
      phase: 1,
      title: "1. Coal Fly Ash",
      desc: "The coal fly ash will be sent to the slurry preparing pond by wheel loader to be prepared into the required concentration coal fly ash slurry by adding rated water, which will be pumped into a slurry tank to be stored and ready to be used.",
    },
    {
      id: 2,
      phase: 1,
      title: "2. Lime",
      desc: "The powder will be sent into the lime powder silo for storage and ready to be used by bucket elevator, after coming into the factory.",
    },
    {
      id: 3,
      phase: 1,
      title: "3. Gypsum",
      desc: "The gypsum in the storage shed will be added into the slurry pond according to the required proportion, while preparing slurry.",
    },
    {
      id: 4,
      phase: 1,
      title: "4. Cement",
      desc: "The cement will be transported into the factory by tank truck and directly is pumped into the cement silo to be used.",
    },
    {
      id: 5,
      phase: 1,
      title: "5. Aluminium Powder",
      desc: "The purchased aluminium powder paste in the bucket or bag will be stored in its storehouse. When being used, it will be lifted to the second floor of the batching building, then measured and added into the aluminium mixer to prepare 5% suspending liquid to be used.",
    },
    {
      id: 6,
      phase: 2,
      title: "6. Waste & Scrape Slurry",
      desc: "The cleaning waste water under the casting machine will be pumped to the ball mill to be used as grinding water. The scrape from the cutting machine will be prepared to slurry and pumped into the waste slurry tank to be used.",
    },
    {
      id: 7,
      phase: 2,
      title: "7. Batching, Mixing and Casting",
      desc: "Coal fly ash will be sent to the electronic scale in the batching building by pump. Lime and cement are sent by single screw conveyer. Aluminium powder is measured manually and prepared as a suspending liquid for each mould. The slurry temperature should arrive at the required process temperature before casting, and the mould will be moved to the bottom of the casting mixer by ferry car.",
    },
    {
      id: 8,
      phase: 3,
      title: "8. Cutting and Grouping",
      desc: "After pre-curing, the green block arrives at the required strength. The crane takes it to the cutting machine section. After removing the mould, the green block is cut according to the required size and moved to the curing trolley in front of the autoclave for grouping. There are seven trolleys for each autoclave with 14 pieces of green block.",
    },
    {
      id: 9,
      phase: 4,
      title: "9. Autoclaved and Finished Product",
      desc: "The green block, after grouping, will be moved into the autoclave by windlass for curing. The whole curing period is approx. 12h, pressure approx. 1.2Mpa, temperature approx. 185°C. After curing, the product will be pulled out of the autoclave and sent to the store yard.",
    },
    {
      id: 10,
      phase: 4,
      title: "10. Bottom Plate Returning & Oiling",
      desc: "After unloading, the side plate on the trolley will be lifted to the returning rail by crane, returned to the side of the cutting machine, combined with the mould, and sent to the mould returning line for cleaning and oiling to be reused.",
    },
  ];

  // Mixed media assignment for each step
  const stepMedia: Record<number, { type: string; src: string }> = {
    1: { type: "image", src: "/manufacturing/images/materials-storage.jpg" },
    2: { type: "image", src: "/manufacturing/images/material-preparation.jpg" },
    3: { type: "image", src: "/manufacturing/images/aluminum-mixing.jpg" },
    4: { type: "video", src: "/manufacturing/videos/factory-overview.mp4" },
    5: { type: "video", src: "/manufacturing/videos/slurry-mixing.mp4" },
    6: { type: "image", src: "/manufacturing/images/waste-recycling.jpg" },
    7: { type: "video", src: "/manufacturing/videos/wire-cutting.mp4" },
    8: { type: "video", src: "/manufacturing/videos/block-grouping.mp4" },
    9: { type: "video", src: "/manufacturing/videos/autoclave-curing.mp4" },
    10: { type: "image", src: "/manufacturing/images/blocks-yard.jpg" },
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Navbar />

      {/* --- HERO: THE FACTORY FLOOR --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white px-6 md:px-12 text-center">
        {/* Hero Background Video - covers entire section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100%", minWidth: "100%" }}
        >
          <source src="/manufacturing/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability - covers entire section */}
        <div className="absolute inset-0 w-full h-full bg-white/70 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
              <Settings size={18} /> Production
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              The Manufacturing Standard.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              A state-of-the-art, fully automated 10-step process engineered for
              absolute uniformity and maximum structural integrity.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl w-full mx-auto text-center px-6 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Process Flowchart Overview
        </h2>
      </div>

      {/* --- CINEMATIC SCROLL-JACKING TIMELINE --- */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Mobile-first: The Cinematic Media Frame stacks on top for small screens, pins to right on large */}
          <div className="w-full lg:w-1/2 sticky top-24 lg:top-32 h-[35vh] md:h-[400px] lg:h-[600px] z-20 mb-8 lg:mb-0 order-1 lg:order-2">
            <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
              {/* Animated Media Crossfader */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepId}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {(() => {
                    const media = stepMedia[
                      activeStepId as keyof typeof stepMedia
                    ] || {
                      type: "image",
                      src: "/images/blocks-stack.jpg",
                    };
                    if (media.type === "video") {
                      return (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover opacity-90"
                        >
                          <source src={media.src} type="video/mp4" />
                        </video>
                      );
                    } else {
                      return (
                        <img
                          src={media.src}
                          alt={`Process step ${activeStepId} visual`}
                          className="w-full h-full object-cover opacity-90"
                        />
                      );
                    }
                  })()}
                </motion.div>
              </AnimatePresence>

              {/* Live Step Indicator Overlay */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg flex items-center gap-3 z-20">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest">
                  Step {activeStepId}
                </span>
              </div>
            </div>
          </div>

          {/* Left Column: The 10 Steps (Scrollable) */}
          <div className="w-full lg:w-1/2 space-y-8 pb-32 order-2 lg:order-1">
            <div className="border-l-2 border-slate-100 pl-6 md:pl-8 space-y-16 overflow-y-auto max-h-[80vh] scroll-smooth">
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  onViewportEnter={() => {
                    setActiveStepId(step.id);
                    setActivePhase(step.phase);
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative transition-all duration-500 min-h-[80vh] ${
                    activePhase === step.phase
                      ? "opacity-100 scale-100"
                      : "opacity-40 scale-95"
                  }`}
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors duration-500 ${
                      activePhase === step.phase
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
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
                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                        <div className="flex flex-col items-center text-center">
                          <Clock
                            className="text-blue-600 mb-2 group-hover:animate-pulse"
                            size={24}
                          />
                          <span className="text-lg md:text-xl font-black text-slate-900">
                            12h
                          </span>
                          <span className="text-[10px] md:text-xs text-slate-500 uppercase">
                            Curing
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center border-l border-r border-slate-100 px-1 md:px-2">
                          <Gauge
                            className="text-blue-600 mb-2 group-hover:rotate-45 transition-transform duration-700"
                            size={24}
                          />
                          <span className="text-lg md:text-xl font-black text-slate-900">
                            1.2<span className="text-sm">Mpa</span>
                          </span>
                          <span className="text-[10px] md:text-xs text-slate-500 uppercase">
                            Pressure
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <Thermometer
                            className="text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-500"
                            size={24}
                          />
                          <span className="text-lg md:text-xl font-black text-slate-900">
                            185°C
                          </span>
                          <span className="text-[10px] md:text-xs text-slate-500 uppercase">
                            Temp
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-slate-100"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCUREMENT CTA --- */}
      <section className="relative py-24 px-6 md:px-12 border-t border-slate-100 text-center overflow-hidden">
        {/* CTA Background Image - covers entire section */}
        <img
          src="/manufacturing/images/cta-bg.png"
          alt="AAC blocks background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100%", minWidth: "100%" }}
        />
        {/* Overlay for readability - covers entire section */}
          <div className="absolute inset-0 w-full h-full bg-slate-900/70 z-10"></div>
        <div className="relative z-20 max-w-3xl mx-auto">
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
      <Footer />
    </div>
  );
}
