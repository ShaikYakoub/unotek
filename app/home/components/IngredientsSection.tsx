"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IngredientsSection() {
  return (
    <section className="py-20 px-8 md:px-24 bg-titanium-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
            Composition
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
            Chemistry That Performs.
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Every input material is sourced to specification. The precise
            proportioning of fly ash, gypsum, lime, and aluminium paste is what
            separates commodity blocks from a certified structural product.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-enterprise-lg"
        >
          <Image
            src="/homepage/images/raw-ingredients.avif"
            alt="Fly ash and gypsum crystals — AAC raw materials"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
