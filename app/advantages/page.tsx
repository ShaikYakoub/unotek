"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingDown,
  ShieldAlert,
  Activity,
  Maximize,
  Clock,
  BugOff,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function AdvantagesPage() {
  const whatsappNumber = "919876543210";

  const savingsData = [
    {
      metric: "25%",
      title: "Foundation Load",
      desc: "Massive reduction in overall structural dead load. [cite: 36]",
    },
    {
      metric: "15%",
      title: "Steel Usage",
      desc: "Significant drop in required steel reinforcement. [cite: 37]",
    },
    {
      metric: "10%",
      title: "Cement Usage",
      desc: "Lower mortar requirements due to uniform block sizes. [cite: 38]",
    },
    {
      metric: "35%",
      title: "Plastering & Labour",
      desc: "Smooth finishes require less plaster and fewer man-hours. [cite: 39]",
    },
  ];

  return (
    <>
      <Navbar />
      {/* --- HERO: THE 66% ADVANTAGE --- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Structural Superiority
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            66% Lighter. <br />
            <span className="text-slate-400">Exponentially Stronger.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            AAC Blocks make construction highly economical [cite: 35]. Being
            about 66% lighter than conventional clay bricks ensures guaranteed,
            measurable savings across every phase of your project [cite: 35].
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-slate-200">
          {savingsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center md:px-6"
            >
              <h3 className="text-5xl md:text-6xl font-black text-blue-600 mb-4">
                {item.metric}
              </h3>
              <p className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                {item.title}
              </p>
              <p className="text-sm text-slate-500 mt-2 font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- COMPREHENSIVE ARCHITECTURAL BENEFITS --- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Engineered for Perfection.
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
              Beyond pure cost reduction, LEOCON AAC blocks elevate the inherent
              safety, comfort, and usable space of your developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {/* Fire & Acoustics */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Fire & Acoustics Resistant
              </h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                [cite_start]AAC Blocks have the highest hourly fire-resistant
                ratings per inch of any building material[cite: 45].
                [cite_start]It will not burn[cite: 46].
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                [cite_start]It has excellent thermal and acoustic insulation,
                making it best suited for air-conditioned and fire-rated
                buildings[cite: 46].
              </p>
            </div>
            {/* Earthquake Resistance */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <Activity size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Earthquake Resistant
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                [cite_start]The impact of earthquake forces on a structure is
                proportional to the weight of the structure[cite: 48].
                [cite_start]Because AAC is exceptionally lightweight, it
                provides excellent resistance to earthquake forces[cite: 49].
              </p>
            </div>
            {/* Carpet Area */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <Maximize size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Enhances Carpet Area
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                [cite_start]AAC Blocks achieve higher wall strength in thinner
                walls than conventional bricks achieve in thick walls[cite: 55].
                [cite_start]This directly results in an increase in usable
                carpet area on every single floor of your project[cite: 56].
              </p>
            </div>
            {/* Time Saving & Uniformity */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Rapid Construction
              </h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                [cite_start]AAC Blocks are lightweight, dry, and set quickly,
                making them a faster option over conventional clay bricks[cite:
                40, 41]. [cite_start]As a result, builders are able to finish
                projects faster than estimated[cite: 42].
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                [cite_start]They come in pre-defined sizes and constant
                dimensions, which minimizes the time spent adjusting them[cite:
                43, 44].
              </p>
            </div>
            {/* Pest Resistant */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <BugOff size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Pest Resistant
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                [cite_start]AAC Blocks are made up of completely inorganic
                materials, which do not get disintegrated[cite: 52, 53].
                [cite_start]They are not susceptible to external influences and
                keep termites away, entirely avoiding pest damage and
                losses[cite: 53].
              </p>
            </div>
            {/* Less Breakage */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <TrendingDown size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Negligible Breakage
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                [cite_start]AAC Blocks have negligible breakage and drastically
                reduce wastage on the construction site, resulting in
                significantly increased utilization compared to traditional red
                clay bricks[cite: 50, 51].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENTERPRISE CTA --- */}
      <section className="py-24 bg-slate-100 text-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
            Ready to Optimize Your Next Build?
          </h2>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20the%20cost-saving%20advantages%20of%20your%20AAC%20blocks.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-5 px-10 rounded-full text-lg shadow-xl hover:bg-blue-700 transition-colors"
          >
            <CheckCircle2 size={24} />
            Discuss Savings via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
