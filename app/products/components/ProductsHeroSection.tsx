"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductsHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/products/images/hero.avif"
          alt="Products Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-10 px-6 md:px-10"
        >
          <span className="text-blue-100 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            Engineered Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className="text-blue-400">BLOCKS</span> FOR EVERY PROJECT
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed">
            Discover a full range of AAC block sizes and specifications designed
            for high-rise, residential, commercial, and industrial construction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
