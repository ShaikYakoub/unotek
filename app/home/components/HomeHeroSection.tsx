"use client";

import type { RefObject } from "react";
import Image from "next/image";
import { motion, type MotionValue } from "framer-motion";
import { MessageSquare, ArrowDown } from "lucide-react";

type Props = {
  whatsappBase: string;
  heroRef: RefObject<HTMLElement | null>;
  heroImageY: MotionValue<string>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function HomeHeroSection({
  whatsappBase,
  heroRef,
  heroImageY,
}: Props) {
  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-start overflow-hidden bg-slate-950"
    >
      <motion.div
        style={{ y: heroImageY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <Image
          src="/homepage/images/hero-bg.avif"
          alt="Homepage Hero Background"
          fill
          priority
          className="object-cover object-center brightness-50"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-20 px-8 md:px-24 max-w-6xl"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-blue-400 mb-6"
        >
          Unotek &nbsp;/&nbsp; Premium AAC
        </motion.p>
        <motion.h1
          variants={fadeUp}
          custom={0.1}
          className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.95]"
        >
          ENGINEERED <br /> FOR THE{" "}
          <span className="text-blue-400">FUTURE.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Next-generation Autoclaved Aerated Concrete. Designed for monumental
          structural integrity and zero environmental compromise.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={whatsappBase}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg hover:bg-blue-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <MessageSquare size={22} />
            Connect with Engineering
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-3 border border-white/30 text-white font-medium py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg hover:border-white/60 hover:bg-white/5 transition-all"
          >
            See Manufacturing
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
