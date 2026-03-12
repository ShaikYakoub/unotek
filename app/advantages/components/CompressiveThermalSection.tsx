"use client";

import { motion } from "framer-motion";
import { Scale, Thermometer } from "lucide-react";

const techSpecs = [
  { density: "451-550", g1: 2.0, g2: 1.5, thermal: 0.21 },
  { density: "551-650", g1: 4.0, g2: 3.0, thermal: 0.24 },
  { density: "651-750", g1: 5.0, g2: 4.0, thermal: 0.3 },
  { density: "751-850", g1: 6.0, g2: 5.0, thermal: 0.37 },
  { density: "851-1000", g1: 7.0, g2: 6.0, thermal: 0.42 },
];

const getWidth = (val: number, max: number) => `${(val / max) * 100}%`;

export default function CompressiveThermalSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Compressive &amp; Thermal Dynamics.
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto">
            Standardized performance metrics across oven-dry density classes.
          </p>
        </div>

        <div className="space-y-12">
          <div className="hidden md:grid grid-cols-12 gap-6 text-sm font-bold uppercase tracking-widest text-slate-400 pb-4 border-b border-slate-200 px-6">
            <div className="col-span-3">Density (Kg/m3)</div>
            <div className="col-span-4 flex items-center gap-2">
              <Scale size={16} /> Compressive Strength (N/mm2)
            </div>
            <div className="col-span-5 flex items-center gap-2">
              <Thermometer size={16} /> Thermal Cond. (W/m.k)
            </div>
          </div>

          {techSpecs.map((spec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-100"
            >
              <div className="col-span-3">
                <p className="text-2xl font-black text-slate-900">
                  {spec.density}
                </p>
              </div>

              <div className="col-span-4 space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-bold inline-block text-slate-600 uppercase">
                      Grade 1
                    </span>
                    <span className="text-sm font-black text-slate-900">
                      {spec.g1.toFixed(1)}
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: getWidth(spec.g1, 7.0) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-blue-600"
                    />
                  </div>
                </div>

                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-bold inline-block text-slate-500 uppercase">
                      Grade 2
                    </span>
                    <span className="text-sm font-black text-slate-700">
                      {spec.g2.toFixed(1)}
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: getWidth(spec.g2, 7.0) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-5 md:pl-12">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-bold inline-block text-emerald-600 uppercase">
                      Insulation Factor
                    </span>
                    <span className="text-sm font-black text-emerald-700">
                      {spec.thermal}
                    </span>
                  </div>
                  <div className="overflow-hidden h-3 text-xs flex rounded-full bg-emerald-50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: getWidth(spec.thermal, 0.42) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
