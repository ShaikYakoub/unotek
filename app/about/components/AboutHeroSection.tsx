"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/images/hero.avif"
          alt="About Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
      <div className="relative z-20 px-8 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-6 py-8 md:px-10 md:py-12"
        >
          <span className="text-blue-100 font-bold tracking-widest uppercase text-sm mb-6 block">
            Building Tomorrow
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
            ADVANCED <span className="text-blue-400">AAC</span> FOR INDIA
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Unotek delivers high-performance AAC blocks engineered for landmark
            projects, sustainable cities, and a new era of construction
            excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
