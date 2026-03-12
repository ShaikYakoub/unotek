"use client";

import { motion } from "framer-motion";

export default function ScaleSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-slate-950">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source
          src="/homepage/videos/drone-shot-of-warehouse.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-4">
          Production Capacity
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter max-w-3xl leading-tight">
          Manufactured at Scale. <br /> Delivered on Time.
        </h2>
      </motion.div>
    </section>
  );
}
