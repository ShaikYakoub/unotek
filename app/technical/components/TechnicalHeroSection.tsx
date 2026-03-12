"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TechnicalHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white px-6 md:px-12 text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <source
          src="/technical/videos/aac-honeycomb-microscopic.webm"
          type="video/webm"
        />
      </video>
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
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            Rigorous standardization and unyielding quality control. Interact
            with our dimensional tolerances and compressive strength parameters
            below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
