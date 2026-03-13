"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Zap, Droplets, Maximize2 } from "lucide-react";

export default function PlantBlueprintSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Enterprise Performance Scale.
          </h2>
          <p className="text-xl font-light text-slate-500 max-w-3xl mx-auto">
            Our 57m x 21.19m facility is engineered for a 50m3 daily capacity,
            expandable to 100m3.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-8 bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 relative group overflow-hidden">
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest z-10">
              <Maximize2 size={14} /> Blueprint Schematic
            </div>
            <div className="w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[500px] bg-slate-50 flex items-center justify-center rounded-xl border border-slate-200 relative overflow-hidden">
              <Image
                src="/about/images/plant-blueprint.avif"
                alt="Plant Blueprint Schematic"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Factory size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 uppercase">
                  Annual Yield
                </h3>
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                15,000{" "}
                <span className="text-lg text-slate-500 font-medium">m3</span>
              </p>
              <p className="text-sm text-slate-500 font-light">
                Calculated across 300 active working days per annum.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 uppercase">
                  Power Matrix
                </h3>
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                150{" "}
                <span className="text-lg text-slate-500 font-medium">HP</span>
              </p>
              <p className="text-sm text-slate-500 font-light">
                Supported by a dedicated 120KVA Generator for uninterrupted
                runs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 uppercase">
                  Hydration Spec
                </h3>
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                15,000{" "}
                <span className="text-lg text-slate-500 font-medium">
                  Liters
                </span>
              </p>
              <p className="text-sm text-slate-500 font-light">
                Fresh soft water required per day for precision slurry mixture.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
