"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Play, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ProcessPage() {
  const whatsappNumber = "919999999999"; // TODO: Replace with actual number
  return (
    <>
      <Navbar />
      {/* --- HERO: THE FACTORY FLOOR --- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Settings size={18} /> Production Infrastructure
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            The Manufacturing Standard.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            A state-of-the-art, fully automated 10-step process engineered for
            absolute uniformity and maximum structural integrity.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl w-full text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Process Flowchart Overview
        </h2>
      </div>

      {/* --- TIMELINE: PHASE 1 --- */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="relative border-l-2 border-slate-200 pl-8 md:pl-16 space-y-24">
          {/* Timeline Node 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-sm">
              01
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Raw Material Sourcing & Storage
            </h3>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm text-slate-600 font-light leading-relaxed space-y-4">
              <p>
                [cite_start]<strong>Coal Fly Ash & Gypsum:</strong> The coal fly
                ash is sent to the slurry preparing pond by a wheel loader to
                prepare the required concentration[cite: 115, 116].
                [cite_start]Gypsum is added into the slurry pond according to
                the required proportion[cite: 119, 120].
              </p>
              <p>
                [cite_start]<strong>Lime & Cement:</strong> Lime powder is sent
                into the lime powder silo by bucket elevator[cite: 117, 118].
                [cite_start]Cement is transported by tank truck and directly
                pumped into the cement silo[cite: 121, 122].
              </p>
            </div>
          </div>

          {/* Timeline Node 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-sm">
              02
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Precision Batching & Casting
            </h3>
            {/* Video Integration Slot */}
            <div className="mb-6 relative h-64 md:h-80 bg-slate-200 rounded-xl overflow-hidden border border-slate-200 group flex items-center justify-center">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10"></div>
              <Play className="text-white w-16 h-16 opacity-80 z-20 shadow-lg" />
              <p className="absolute bottom-4 left-4 text-white font-bold z-20 text-sm tracking-widest uppercase drop-shadow-md">
                Video: High-Speed Slurry Mixing
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm text-slate-600 font-light leading-relaxed space-y-4">
              <p>
                [cite_start]Coal fly ash is sent to the electronic scale in the
                batching building by pump[cite: 128, 129]. [cite_start]Lime and
                cement are sent to the electronic scale via single screw
                conveyers[cite: 132].
              </p>
              <p>
                [cite_start]The finished aluminium suspending liquid is directly
                added into the casting mixer[cite: 135]. [cite_start]Once the
                slurry temperature arrives at the required process temperature,
                it is poured into molds moved by ferry cars[cite: 136, 137].
              </p>
            </div>
          </div>

          {/* Timeline Node 3 */}
          <div className="relative">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-sm">
              03
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Wire Cutting & Grouping
            </h3>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm text-slate-600 font-light leading-relaxed space-y-4">
              <p>
                [cite_start]After pre-curing, the green block arrives at the
                required strength and is taken by crane to the cutting machine
                section[cite: 139].
              </p>
              <p>
                [cite_start]After removing the mold, the green block is cut
                precisely according to the required size[cite: 140].
                [cite_start]It is then moved to the curing trolley in front of
                the autoclave for grouping, with seven trolleys allocated for
                each autoclave containing 14 pieces of green block[cite: 141,
                142].
              </p>
              <p className="text-sm border-t border-slate-200 pt-4 mt-4">
                [cite_start]
                <em>
                  * Waste slurry and scrap from the cutting machine are prepared
                  into slurry and pumped into a waste tank to be fully
                  reused[cite: 126, 127].
                </em>
              </p>
            </div>
          </div>

          {/* Timeline Node 4 */}
          <div className="relative">
            <div className="absolute -left-[41px] md:-left-[73px] top-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-sm">
              04
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Autoclave Steam Curing
            </h3>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm text-slate-700 font-light leading-relaxed mt-6">
              <p className="mb-4">
                [cite_start]The green blocks are moved into the autoclave by
                windlass for curing[cite: 144].
              </p>
              <ul className="list-disc pl-5 space-y-2 font-bold text-slate-900 mb-4">
                <li>Curing Period: Approx. [cite_start]12 Hours [cite: 145]</li>
                <li>Pressure: Approx. [cite_start]1.2 Mpa [cite: 145]</li>
                <li>Temperature: Approx. [cite_start]1850 [cite: 145, 146]</li>
              </ul>
              <p>
                [cite_start]After curing, the finalized product is pulled out of
                the autoclave and sent to the store yard[cite: 146].
                [cite_start]Finally, the side plates are returned, combined with
                the mold, and sent to the returning line for cleaning and oiling
                to be reused[cite: 147, 148].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 text-center px-6 md:px-12">
        <div className="max-w-2xl mx-auto border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Verified Production Standards
          </h2>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%20manufacturing%20process%20and%20would%20like%20to%20place%20an%20order.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-slate-900 font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-colors"
          >
            <CheckCircle2 size={24} />
            Procure Blocks Now
          </a>
        </div>
      </section>
    </>
  );
}
