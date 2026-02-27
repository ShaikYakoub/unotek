"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Factory, Droplets, Zap, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const whatsappNumber = "919876543210"; // Replace with client's actual number

  return (
    <>
      <Navbar />
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Corporate Infrastructure
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            UNOTEK.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Pioneering next-generation Autoclaved Aerated Concrete
            manufacturing. [cite_start]Engineered to increase building quality
            and simultaneously reduce costs at the construction site[cite: 18].
          </p>
        </motion.div>
      </section>
      {/* --- LEADERSHIP & LOCATION --- */}
      {/* ...rest of your page content... */}
    </>
  );
}
