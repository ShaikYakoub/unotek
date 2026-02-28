"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, FileText, Scale, Thermometer, Box } from "lucide-react";
import Navbar from "../components/Navbar";

export default function PremiumTechnicalPage() {
  const whatsappNumber = "YOUR_CLIENT_NUMBER";
  const [activeSize, setActiveSize] = useState<"4 Inch" | "6 Inch" | "9 Inch">(
    "6 Inch",
  );

  // Dimensional Data mapped from UNOTEK report [cite: 156]
  const blockData = {
    "4 Inch": {
      dim: '24" x 8" x 4"',
      yield: 83,
      rate: "₹50-60",
      avg: "₹4500",
      depthScale: 0.4,
    },
    "6 Inch": {
      dim: '24" x 8" x 6"',
      yield: 55,
      rate: "₹75-85",
      avg: "₹4400",
      depthScale: 0.6,
    },
    "9 Inch": {
      dim: '24" x 8" x 9"',
      yield: 36,
      rate: "₹110-120",
      avg: "₹4150",
      depthScale: 0.9,
    },
  };

  // Structural Specs mapped from UNOTEK report [cite: 158]
  const techSpecs = [
    { density: "451-550", g1: 2.0, g2: 1.5, thermal: 0.21 },
    { density: "551-650", g1: 4.0, g2: 3.0, thermal: 0.24 },
    { density: "651-750", g1: 5.0, g2: 4.0, thermal: 0.3 },
    { density: "751-850", g1: 6.0, g2: 5.0, thermal: 0.37 },
    { density: "851-1000", g1: 7.0, g2: 6.0, thermal: 0.42 },
  ];

  // Helper for animated bar chart widths (Max G1 is 7.0, Max Thermal is 0.42)
  const getWidth = (val: number, max: number) => `${(val / max) * 100}%`;

  return (
    <>
      <Navbar />
      <div className="font-sans text-slate-900 bg-white min-h-screen pb-20">
        {/* --- HERO: ENGINEERING DATA --- */}
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
            <source
              src="/technical/videos/aac-honeycomb-microscopic.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlay for readability - covers entire section */}
          <div className="absolute inset-0 w-full h-full bg-white/70 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="py-20"
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
                <FileText size={18} /> Engineering & Compliance
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                Technical <span className="text-blue-600">Specifications</span>.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
                Rigorous standardization and unyielding quality control.
                Interact with our dimensional tolerances and compressive
                strength parameters below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- INTERACTIVE BLOCK CONFIGURATOR --- */}
        <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Configurator UI */}
            <div className="space-y-10 z-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200 text-blue-600">
                    <Ruler size={24} />
                  </div>
                  <h2 className="text-4xl font-black tracking-tight text-slate-900">
                    Dimensional Yield
                  </h2>
                </div>
                <p className="text-lg text-slate-500 font-light">
                  Select your required block thickness to instantly calculate
                  per-cubic-meter yields and market rate averages. [cite_start]1
                  M³ is equal to 590 Red Clay Bricks[cite: 155].
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex gap-4 p-2 bg-white rounded-2xl border border-slate-200 shadow-sm w-full max-w-md">
                {(["4 Inch", "6 Inch", "9 Inch"] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all text-sm uppercase tracking-wide ${
                      activeSize === size
                        ? "bg-slate-900 text-white shadow-md transform scale-[1.02]"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Dynamic Data Readout */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Dimensions
                  </p>
                  <p className="text-2xl font-black text-slate-900">
                    {blockData[activeSize].dim}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-b-4 border-b-blue-600">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Yield / m³
                  </p>
                  <motion.p
                    key={activeSize}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-blue-600"
                  >
                    {blockData[activeSize].yield}{" "}
                    <span className="text-lg text-slate-500 font-medium">
                      blocks
                    </span>
                  </motion.p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Market Rate
                  </p>
                  <p className="text-xl font-bold text-slate-900">
                    {blockData[activeSize].rate}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Avg. Value
                  </p>
                  <p className="text-xl font-bold text-slate-900">
                    {blockData[activeSize].avg}
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Morphing Visualizer */}
            <div className="relative h-[250px] flex items-center justify-center bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="absolute top-6 left-6 text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Box size={16} /> Live Volume Preview
              </div>
              {/* The Morphing Block */}
              <div className="relative w-[300px] h-[120px] flex items-center justify-center">
                <motion.div
                  layout
                  initial={false}
                  animate={{
                    width: 300,
                    height: 120,
                    scaleY: blockData[activeSize].depthScale, // Physically morphs the depth
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="bg-slate-200 border-2 border-slate-300 rounded-lg shadow-inner flex items-center justify-center origin-bottom"
                >
                  {/* Surface Texture Simulation */}
                  <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply opacity-50"></div>
                </motion.div>
                <span
                  className="font-black text-slate-400 text-2xl z-20 pointer-events-none"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "1.5rem",
                  }}
                >
                  {activeSize}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- ANIMATED STRUCTURAL & THERMAL CHARTS --- */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                Compressive & Thermal Dynamics.
              </h2>
              <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto">
                Review standardized performance metrics across oven-dry density
                classes. [cite_start]Our blocks scale linearly in compressive
                strength while maintaining massive thermal efficiency[cite:
                158].
              </p>
            </div>

            <div className="space-y-12">
              {/* Table Header / Legend */}
              <div className="hidden md:grid grid-cols-12 gap-6 text-sm font-bold uppercase tracking-widest text-slate-400 pb-4 border-b border-slate-200 px-6">
                <div className="col-span-3">Density (Kg/m³)</div>
                <div className="col-span-4 flex items-center gap-2">
                  <Scale size={16} /> Compressive Strength (N/mm²)
                </div>
                <div className="col-span-5 flex items-center gap-2">
                  <Thermometer size={16} /> Thermal Cond. (W/m.k)
                </div>
              </div>

              {/* Data Rows */}
              {techSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-100"
                >
                  {/* Density */}
                  <div className="col-span-3">
                    <p className="md:hidden text-xs font-bold uppercase text-slate-400 mb-1">
                      Density
                    </p>
                    <p className="text-2xl font-black text-slate-900">
                      {spec.density}
                    </p>
                  </div>

                  {/* Compressive Strength Bars */}
                  <div className="col-span-4 space-y-4">
                    <p className="md:hidden text-xs font-bold uppercase text-slate-400">
                      Compressive Strength
                    </p>

                    {/* Grade 1 */}
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
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                        ></motion.div>
                      </div>
                    </div>

                    {/* Grade 2 */}
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
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-400"
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Thermal Conductivity Bar */}
                  <div className="col-span-5 md:pl-12">
                    <p className="md:hidden text-xs font-bold uppercase text-slate-400 mb-2">
                      Thermal Cond. (W/m.k)
                    </p>
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
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHATSAPP CTA --- */}
        <section className="py-24 text-center px-6 md:px-12 border-t border-slate-800 relative overflow-hidden">
          {/* Background image and overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/technical/images/cta-bg.png"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-6">
              Require Project-Specific Tolerances?
            </h2>
            <p className="text-xl text-slate-400 mb-10 font-light">
              Send these exact engineering specs to our procurement team for a
              customized volume breakdown and logistics check.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%20technical%20specifications%20and%20need%20a%20consultation%20on%20grade%20requirements.`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-slate-900 font-bold py-5 px-12 rounded-full text-lg shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Consult Engineering Desk
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
