"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Layer data ───────────────────────────────────────────────────────────── //
const layers = [
  {
    id: 0,
    label: "Fly Ash",
    percent: "70%",
    color: "from-amber-600 to-amber-800",
    dot: "bg-amber-500",
    title: "Fly Ash (70%)",
    desc: "An indispensable by-product of Thermal Power Plants, forming the primary bulk of the block. Consuming this industrial waste mitigates a massive environmental threat — the country produces 60 million tonnes annually, of which only 5% is currently reused.",
    stat: "60M tonnes / year",
    statLabel: "Annual fly ash output",
  },
  {
    id: 1,
    label: "Cement & Lime",
    percent: "15%",
    color: "from-slate-400 to-slate-600",
    dot: "bg-slate-400",
    title: "Cement & Lime",
    desc: "The foundational binders that govern structural performance. Block hardness is achieved directly by cement strength, while quicklime reacts exothermically with fly ash silicates to produce additional calcium silicate hydrate — the same compound that gives concrete its strength.",
    stat: "2 – 6 N/mm²",
    statLabel: "Compressive strength grades",
  },
  {
    id: 2,
    label: "Gypsum",
    percent: "5%",
    color: "from-rose-300 to-rose-500",
    dot: "bg-rose-400",
    title: "Gypsum",
    desc: "Gypsum acts as a long-term strength gainer. It retards the initial set of cement, giving the slurry enough time to expand fully from the hydrogen gas reaction before the block rigidifies — ensuring a uniform, defect-free pore structure through to the core.",
    stat: "Long-term",
    statLabel: "Strength gain profile",
  },
  {
    id: 3,
    label: "Aluminium Paste",
    percent: "0.05–0.08%",
    color: "from-blue-400 to-blue-600",
    dot: "bg-blue-400",
    title: "Aluminium Paste",
    desc: "The catalyst that defines AAC. The chemical reaction with calcium hydroxide generates hydrogen gas, forming 80% air by volume within the block. This macro-porosity is the source of every AAC advantage: lightweight mass, thermal insulation, fire resistance, and acoustic damping.",
    stat: "80% air by volume",
    statLabel: "Post-reaction composition",
  },
];

export default function AnatomyOfBlock() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const active = layers[activeLayer];

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-4">
          Material Science
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
          The Anatomy of Strength.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* ── LEFT: interactive layer selector ──────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
          {/* Macro product image as subtle background */}
          <div className="absolute inset-0">
            <Image
              src="/homepage/images/macro-of-AAC-block.png"
              alt="Macro of AAC block — porous structure"
              fill
              className="object-cover opacity-20"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          <div className="relative z-10 p-8 space-y-3">
            {layers.map((layer) => {
              const isActive = activeLayer === layer.id;
              return (
                <motion.button
                  key={layer.id}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onClick={() => setActiveLayer(layer.id)}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive
                      ? "border-blue-500/50 bg-blue-500/10"
                      : "border-slate-700/50 bg-transparent hover:bg-slate-700/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${layer.dot} ${isActive ? "shadow-[0_0_8px_3px_rgba(96,165,250,0.4)]" : ""}`}
                      />
                      <span
                        className={`text-lg font-bold ${isActive ? "text-white" : "text-slate-400"}`}
                      >
                        {layer.label}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold tabular-nums ${isActive ? "text-blue-400" : "text-slate-600"}`}
                    >
                      {layer.percent}
                    </span>
                  </div>

                  {/* Animated fill bar */}
                  {isActive && (
                    <motion.div
                      className="mt-3 h-1 rounded-full overflow-hidden bg-slate-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${layer.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            layer.id === 0
                              ? "70%"
                              : layer.id === 1
                                ? "15%"
                                : layer.id === 2
                                  ? "5%"
                                  : "3%",
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: animated detail panel ──────────────────────────────────── */}
        <div className="flex flex-col justify-center md:min-h-[460px] py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Active dot + label */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-3 h-3 rounded-full ${active.dot}`} />
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">
                  Composition Layer {active.id + 1} of {layers.length}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
                {active.title}
              </h3>
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8">
                {active.desc}
              </p>

              {/* Stat callout */}
              <div className="border border-slate-700 rounded-2xl p-6 bg-slate-800/50 inline-block">
                <p className="text-3xl font-black text-blue-400 mb-1">
                  {active.stat}
                </p>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">
                  {active.statLabel}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
