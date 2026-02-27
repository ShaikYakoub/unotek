"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, ArrowDown, CheckCircle2, Wind, Shield, Zap } from "lucide-react";
import EnterpriseEstimationEngine from "./components/EnterpriseEstimationEngine";
import AdvancedEstimationEngine from "./components/AdvancedEstimationEngine";
import AnatomyOfBlock from "./components/AnatomyOfBlock";
import ProjectGallery from "./components/ProjectGallery";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Navbar from "./components/Navbar";

// ─── Animation helpers ────────────────────────────────────────────────────── //
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// ─── Process step data ────────────────────────────────────────────────────── //
const processSteps = [
  {
    num: "01",
    title: "Precision Blending",
    desc: "AAC is produced out of a precise mix of pulverized fly ash, lime, cement, gypsum, water, and aluminium. The chemical reaction from the aluminium paste provides the distinct porous structure and lightness.",
    video:
      "/videos/Slow-motion%20extreme%20close-up%20of%20dark%20fly%20ash%20slurry%20and%20pure%20white%20lime%20powder%20blending.mp4",
    imageRight: false,
  },
  {
    num: "02",
    title: "Mould Casting",
    desc: "The homogeneous slurry is poured into precision steel moulds in controlled volumes. The aluminium reacts to generate hydrogen, causing the mix to rise and form millions of uniformly distributed micro-pores throughout the block.",
    video: "/videos/mold%20filling%20with%20grey%20slurry.mp4",
    imageRight: true,
  },
  {
    num: "03",
    title: "Wire-Cut Dimensioning",
    desc: "Once the green cake has partially set, a taut stainless-steel wire array slices it with sub-millimetre precision into dimensionally accurate blocks — eliminating the mortar waste associated with conventional brickwork.",
    video:
      "/videos/A%20taut%20steel%20wire%20smoothly%20slices%20through%20a%20large%2C%20semi-solid%20green%20AAC%20cake.mp4",
    imageRight: false,
  },
  {
    num: "04",
    title: "Autoclaved Curing",
    desc: "Block hardness is achieved by cement strength and an instant curing mechanism by autoclaving. The blocks are hardened by steam-curing in pressurised autoclaves at 180 °C, resulting in a high-insulating, Grade A building product.",
    video: "/videos/autoclave%20seal%20shut.mp4",
    imageRight: true,
  },
];

// ─── Component ────────────────────────────────────────────────────────────── //
export default function PremiumAACWebsite() {
  const whatsappNumber = "YOUR_CLIENT_NUMBER"; // ← replace with actual number
  const whatsappBase = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20procuring%20premium%20AAC%20blocks%20for%20an%20upcoming%20project.`;

  // Parallax for hero image
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="font-sans text-slate-900 bg-[#F8F9FA] min-h-screen selection:bg-blue-200">
      <Navbar whatsappLink={whatsappBase} />
      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-start overflow-hidden bg-slate-950"
      >
        {/* Parallax background image */}
        <motion.div
          style={{ y: heroImageY }}
          className="absolute inset-0 z-0 scale-110"
        >
          <Image
            src="/images/modern%20skyscraper%20interior%20under%20construction.png"
            alt="Modern skyscraper interior under construction"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-900/85 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Copy */}
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
            className="flex flex-col xs:flex-row gap-4"
          >
            <a
              href={whatsappBase}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <MessageSquare size={22} />
              Connect with Engineering
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-3 border border-white/30 text-white font-medium py-4 px-10 rounded-full text-lg hover:border-white/60 hover:bg-white/5 transition-all"
            >
              See Manufacturing
              <ArrowDown size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom scroll nudge */}
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

      {/* ─── QUICK-SCAN ICON TRUST STRIP ─────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100 py-10 px-8 shadow-sm relative z-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {[
            {
              icon: Wind,
              title: '66% Lighter',
              desc: 'Massive reduction in foundation dead load vs red clay brick.',
            },
            {
              icon: Shield,
              title: 'Ultimate Fire Safety',
              desc: 'Highest fire-resistance ratings per inch — zero combustion.',
            },
            {
              icon: Zap,
              title: 'Thermal Efficiency',
              desc: 'Drastically reduces HVAC tonnage and lifetime operational costs.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center pt-6 md:pt-0 px-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MANUFACTURING PROCESS ───────────────────────────────────────────── */}
      <section id="process" className="py-32 px-8 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
              ISO Process
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              The Manufacturing Standard.
            </h2>
          </motion.div>

          <div className="space-y-32">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}
              >
                <div className={step.imageRight ? "order-1 md:order-2" : ""}>
                  <span className="text-8xl font-black text-slate-100 leading-none select-none">
                    {step.num}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
                    {step.title}
                  </h3>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div
                  className={`h-[420px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl ${step.imageRight ? "order-2 md:order-1" : ""}`}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    key={step.video}
                  >
                    <source src={step.video} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AT SCALE — AERIAL WAREHOUSE ─────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="/videos/drone%20shot%20of%20warehouse%20grok.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

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

      {/* ─── ANATOMY OF A BLOCK ──────────────────────────────────────────────── */}
      <section id="anatomy" className="py-32 bg-slate-900 text-white">
        <AnatomyOfBlock />
      </section>

      {/* ─── TRUST — ENGINEER SECTION ────────────────────────────────────────── */}
      <section className="py-32 px-8 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative h-[520px] w-full rounded-3xl overflow-hidden shadow-enterprise-lg"
          >
            <Image
              src="/images/structural%20indian%20engineer%20reviewing%20a%20blueprint.png"
              alt="Structural engineer reviewing a blueprint"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </motion.div>

          {/* Copy */}
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
              team works directly with your structural consultant to provide
              load calculations, thermal performance data, and specification
              sheets — removing every barrier to approval.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Technical data sheet on every batch",
                "Compressive strength: 2, 3.5, 4 & 6 N/mm²",
                "U-value documentation for green building compliance",
                "Complete MSDS available on request",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
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
              className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-4 px-10 rounded-full text-base hover:bg-slate-800 transition-all"
            >
              <MessageSquare size={20} />
              Request Technical Sheet
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── INGREDIENTS SHOWCASE ────────────────────────────────────────────── */}
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
              proportioning of fly ash, gypsum, lime, and aluminium paste is
              what separates commodity blocks from a certified structural
              product.
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
              src="/images/sleek%20glass%20beaker%20containing%20pulverized%20fly%20ash%2C%20next%20to%20raw%20gypsum%20crystals.png"
              alt="Fly ash and gypsum crystals — AAC raw materials"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT GALLERY (MASONRY) ───────────────────────────────────────── */}
      <section id="projects" className="py-32 bg-white">
        <ProjectGallery whatsappLink={whatsappBase} />
      </section>

      {/* ─── ADVANCED ESTIMATION ENGINE ──────────────────────────────────────── */}
      <section id="calculator" className="py-32 bg-[#F8F9FA]">
        <AdvancedEstimationEngine whatsappLink={whatsappBase} />
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="py-16 bg-white border-t border-slate-100 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black tracking-tighter">UNOTEK.</h2>
            <p className="text-sm text-slate-400 mt-1 font-light">
              Premium AAC Blocks — Engineered for the Future.
            </p>
          </div>
          <div className="flex flex-col xs:flex-row gap-6 items-center">
            <a href="#process" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Manufacturing</a>
            <a href="#anatomy" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Anatomy</a>
            <a href="#projects" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Projects</a>
            <a href="#calculator" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Calculator</a>
            <a
              href={whatsappBase}
              target="_blank"
              rel="noreferrer"
              className="text-sm bg-slate-900 text-white font-bold py-2.5 px-6 rounded-full hover:bg-slate-700 transition-colors"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-300 text-center">
            © {new Date().getFullYear()} Unotek. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ───────────────────────────────────────────────── */}
      <FloatingWhatsApp whatsappLink={whatsappBase} />
    </div>
  );
}
