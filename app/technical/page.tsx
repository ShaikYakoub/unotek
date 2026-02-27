"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Ruler, Scale, Thermometer } from "lucide-react";
import Navbar from "../components/Navbar";

export default function TechnicalPage() {
  const whatsappNumber = "919876543210";

  // Data directly from UNOTEK specs
  const blockDimensions = [
    {
      size: "4 Inch",
      dimensions: "24 * 8 * 4",
      blocksPerM3: 83,
      marketRate: "50-60",
      avgValue: "4500",
    }, // [cite: 156]
    {
      size: "6 Inch",
      dimensions: "24 * 8 * 6",
      blocksPerM3: 55,
      marketRate: "75-85",
      avgValue: "4400",
    }, // [cite: 156]
    {
      size: "9 Inch",
      dimensions: "24 * 8 * 9",
      blocksPerM3: 36,
      marketRate: "110-120",
      avgValue: "4150",
    }, // [cite: 156]
  ];

  const technicalSpecs = [
    { density: "451-550", grade1: "2.0", grade2: "1.5", thermal: "0.21" }, // [cite: 158]
    { density: "551-650", grade1: "4.0", grade2: "3.0", thermal: "0.24" }, // [cite: 158]
    { density: "651-750", grade1: "5.0", grade2: "4.0", thermal: "0.30" }, // [cite: 158]
    { density: "751-850", grade1: "6.0", grade2: "5.0", thermal: "0.37" }, // [cite: 158]
    { density: "851-1000", grade1: "7.0", grade2: "6.0", thermal: "0.42" }, // [cite: 158]
  ];

  return (
    <>
      <Navbar />
      {/* --- HERO: ENGINEERING DATA --- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <FileText size={18} /> Engineering Specifications
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Technical Data.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Rigorous standardization and unyielding quality control. Review our
            dimensional tolerances, compressive strength ratings, and thermal
            parameters below.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200 text-blue-600">
            <Ruler size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Block Dimensions & Volume Yield
            </h2>
            <p className="text-slate-500 mt-1">
              1 M³ is equal to 590 Red Clay Bricks. [cite: 155]
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/50 text-slate-500 text-sm tracking-widest uppercase">
                  <th className="p-6 font-bold border-b border-slate-200">
                    Block Size
                  </th>
                  <th className="p-6 font-bold border-b border-slate-200">
                    Dimensions (L*W*H)
                  </th>
                  <th className="p-6 font-bold border-b border-slate-200">
                    No. of Blocks / m³
                  </th>
                  <th className="p-6 font-bold border-b border-slate-200">
                    Avg Market Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {blockDimensions.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="p-6 font-black text-slate-900">
                      {row.size}
                    </td>
                    <td className="p-6 font-medium">{row.dimensions}</td>
                    <td className="p-6 font-bold text-blue-600">
                      {row.blocksPerM3}
                    </td>
                    <td className="p-6">₹{row.avgValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- STRUCTURAL & THERMAL METRICS TABLE --- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-50 rounded-lg shadow-sm border border-slate-200 text-blue-600">
              <Scale size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Compressive Strength & Insulation
              </h2>
              <p className="text-slate-500 mt-1">
                Standardized metrics across multiple grading classes.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                    <th className="p-6 font-bold border-b border-slate-800">
                      Block Density <br />{" "}
                      <span className="text-slate-400 text-xs font-normal">
                        Oven Dry Condition (Kg/m³)
                      </span>
                    </th>
                    <th className="p-6 font-bold border-b border-slate-800">
                      Comprehensive Strength <br />{" "}
                      <span className="text-slate-400 text-xs font-normal">
                        Min Grade 1 (N/mm²)
                      </span>
                    </th>
                    <th className="p-6 font-bold border-b border-slate-800">
                      Comprehensive Strength <br />{" "}
                      <span className="text-slate-400 text-xs font-normal">
                        Min Grade 2 (N/mm²)
                      </span>
                    </th>
                    <th className="p-6 font-bold border-b border-slate-800 flex items-center gap-2">
                      <Thermometer size={16} /> Thermal Conductivity <br />{" "}
                      <span className="text-slate-400 text-xs font-normal">
                        Air Dry Condition (W/m.k)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800 bg-white">
                  {technicalSpecs.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-6 font-black text-slate-900">
                        {row.density}
                      </td>
                      <td className="p-6 font-bold text-blue-600">
                        {row.grade1}
                      </td>
                      <td className="p-6 font-bold text-blue-600">
                        {row.grade2}
                      </td>
                      <td className="p-6 font-medium text-slate-600">
                        {row.thermal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCUREMENT CTA --- */}
      <section className="py-20 bg-slate-900 text-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Need Project-Specific Consultation?
          </h2>
          <p className="text-lg text-slate-400 mb-8 font-light">
            Forward these specs directly to our engineering team for a
            comprehensive volume and cost breakdown.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%20technical%20specifications%20and%20need%20a%20consultation%20on%20grade%20requirements.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-blue-50 font-bold py-5 px-10 rounded-full text-lg shadow-xl transition-colors"
          >
            Consult via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
