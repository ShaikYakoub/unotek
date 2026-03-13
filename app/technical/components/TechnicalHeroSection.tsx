"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TechnicalHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-6 md:px-12 text-center">
      <div className="absolute -top-20 -right-8 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-4 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-10 px-6 md:px-10"
        >
          <span className="text-blue-100 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <FileText size={18} /> Engineering & Compliance
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Technical <span className="text-blue-100">Specifications</span>.
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed">
            Rigorous standardization and unyielding quality control. Interact
            with our dimensional tolerances and compressive strength parameters
            below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
