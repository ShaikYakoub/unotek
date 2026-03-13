"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare } from "lucide-react";

type Props = {
  whatsappBase: string;
};

export default function EngineerTrustSection({ whatsappBase }: Props) {
  return (
    <section className="py-32 px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative h-[520px] w-full rounded-3xl overflow-hidden shadow-enterprise-lg"
        >
          <Image
            src="/homepage/images/engineer-reviewing-blueprint.avif"
            alt="Structural engineer reviewing a blueprint"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-5">
            Structural Confidence
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
            Trusted by <br /> Structural Engineers.
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
            Every block carries a traceable batch certificate. Our technical
            team works directly with your structural consultant to provide load
            calculations, thermal performance data, and specification sheets.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Technical data sheet on every batch",
              "Compressive strength: 2, 3.5, 4 & 6 N/mm²",
              "U-value documentation for green building compliance",
              "Complete MSDS available on request",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2
                  size={18}
                  className="text-blue-500 flex-shrink-0 mt-0.5"
                />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappBase}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-base hover:bg-blue-700 transition-all"
          >
            <MessageSquare size={20} />
            Request Technical Sheet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
