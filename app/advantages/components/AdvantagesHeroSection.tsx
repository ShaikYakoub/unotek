"use client";

import { motion } from "framer-motion";

export default function AdvantagesHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white pt-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      >
        <source src="/advantages/videos/hero.webm" type="video/webm" />
      </video>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center h-full py-20"
      >
        <span className="text-blue-700 font-bold tracking-widest uppercase text-sm mb-4 block">
          The Competitive Edge
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tight">
          Outperform. <br />
          <span className="text-blue-600">Outlast.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
          AAC Blocks make construction highly economical, being about 66%
          lighter than conventional clay bricks. Discover the assured structural
          savings.
        </p>
      </motion.div>
    </section>
  );
}
