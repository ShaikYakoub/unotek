"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function ManufacturingHeroSection() {
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
        <source src="/manufacturing/videos/hero-bg.webm" type="video/webm" />
      </video>
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
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            A state-of-the-art, fully automated 10-step process engineered for
            absolute uniformity and maximum structural integrity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
