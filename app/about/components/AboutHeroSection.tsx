"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-100 pt-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          poster="/about/images/hero-bg.avif"
        >
          <source src="/about/videos/hero-bg.webm" type="video/webm" />
        </video>
        <Image
          src="/about/images/hero-bg.avif"
          alt="About Hero Background"
          fill
          className="object-cover absolute inset-0 opacity-30"
          style={{ zIndex: -1 }}
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 px-8 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 block">
            Corporate Performance
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
            UNOTEK
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Spearheaded by Mr. Siva Prasad of Iyantra Industries, we are
            pioneering next-generation AAC manufacturing.
          </p>
          <div className="inline-flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase text-slate-500 bg-white/80 backdrop-blur-md py-3 px-6 rounded-full border border-slate-200 shadow-sm">
            <MapPin className="text-blue-600" size={18} />
            Plot 165, YSR Jagananna Mega Industrial Hub, Kopparthy, Phase 1, YSR
            Dist. Kadapa, AP - 516003
          </div>
        </motion.div>
      </div>
    </section>
  );
}
