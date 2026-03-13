"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function ManufacturingHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 text-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/manufacturing/images/hero.avif"
          alt="Manufacturing Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-10 px-6 md:px-10"
        >
          <span className="text-blue-100 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            Precision Manufacturing
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className="text-blue-400">AUTOMATED.</span> CONSISTENT.
            RELIABLE.
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed">
            Our advanced AAC production line ensures every block meets the
            highest standards for quality, strength, and uniformity—delivering
            performance you can trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
