"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AdvantagesHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-6 md:px-12 text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/advantages/images/hero.avif"
          alt="Advantages Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center h-full py-10 px-6 md:px-10 max-w-7xl mx-auto"
      >
        <span className="text-blue-100 font-bold tracking-widest uppercase text-sm mb-4 block">
          Performance & Savings
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight">
          LIGHTER. STRONGER. <span className="text-blue-400">SMARTER.</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed">
          Experience the structural, thermal, and economic advantages of AAC
          blocks—delivering unmatched efficiency and reliability for every
          build.
        </p>
      </motion.div>
    </section>
  );
}
