"use client";

import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, Shield, TrendingDown, Clock, Move, BugOff } from "lucide-react";

export default function PremiumAdvantagesPage() {
  const whatsappNumber = "YOUR_CLIENT_NUMBER";
  const containerRef = useRef(null);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen pb-20">
      <Navbar />
      {/* --- HERO: THE MATERIAL REVOLUTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white pt-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/advantages/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center justify-center h-full py-20"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            The Competitive Edge
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tight">
            Outperform. <br />
            <span className="text-blue-600">Outlast.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            [cite_start]AAC Blocks make construction highly economical, being
            about 66% lighter than conventional clay bricks[cite: 35]. Discover
            the assured structural savings.
          </p>
        </motion.div>
      </section>

      {/* --- STICKY SCROLL-JACKING: AAC VS RED CLAY --- */}
      <section
        className="relative px-6 md:px-12 max-w-7xl mx-auto py-24"
        ref={containerRef}
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Pinned Context */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6 z-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              The End of <br /> Conventional <br />{" "}
              <span className="text-blue-600">Clay Bricks.</span>
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Every cubic meter of traditional material you replace with LEOCON
              AAC exponentially decreases your structural dead load while
              drastically accelerating your project timeline.
            </p>
            <div className="hidden lg:block w-24 h-1 bg-blue-600 mt-8"></div>
          </div>

          {/* Right Column: Scrolling Proofs */}
          <div className="lg:w-2/3 space-y-32">
            {/* Proof 1: Weight & Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
            >
              <div className="relative h-64 w-full bg-slate-200 rounded-2xl overflow-hidden mb-8">
                {/* 🎬 Video Prompt: Scale tipping heavily under red bricks vs balancing lightly with AAC (6s loop) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/advantages/videos/scale.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  66% Lighter
                </div>
              </div>
            </motion.div>
            {/* Proof 2: Fire & Insulation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
            >
              <div className="relative h-64 w-full bg-slate-200 rounded-2xl overflow-hidden mb-8">
                {/* 🎬 Video Prompt: Split-screen: left side shows a raging orange fire; right side shows a pristine AAC block wall completely unaffected (6s loop) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/advantages/videos/fire.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">
                Ultimate Safety Ratings.
              </h3>
              <p className="text-lg text-slate-600 font-light mb-6">
                [cite_start]AAC Blocks possess the highest hourly fire-resistant
                ratings per inch of any building material[cite: 46]. It simply
                will not burn. [cite_start]Additionally, its porous nature
                provides excellent thermal and acoustic insulation[cite: 46].
              </p>
            </motion.div>

            {/* Proof 3: Speed & Labor */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
            >
              <div className="relative h-64 w-full bg-slate-200 rounded-2xl overflow-hidden mb-8">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/advantages/videos/rapid-deployment.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">
                Rapid Deployment.
              </h3>
              <p className="text-lg text-slate-600 font-light mb-6">
                [cite_start]AAC Blocks are dry and set quickly, making them a
                dramatically faster option[cite: 41]. [cite_start]Because they
                come in pre-defined sizes and constant dimensions, builders
                minimize the time required to adjust them[cite: 44].
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm inline-block">
                <p className="text-4xl font-black text-blue-600 mb-1">35%</p>
                [cite_start]
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Reduction in plastering & labour cost [cite: 39]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE X-RAY BLOCK ANATOMY --- */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative group cursor-crosshair">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
              Hover to Inspect Structure
            </h3>

            {/* The interactive block image container */}
            <div className="relative w-full aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="/advantages/images/aac-honeycomb-studio-cut.png"
                alt="AAC Honeycomb Studio Cut"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              {/* Overlay that appears only on hover */}
              <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

              {/* Data points that appear on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <BugOff className="text-blue-400 mx-auto mb-2" size={24} />
                  <p className="font-bold">Termite Free</p>
                  [cite_start]
                  <p className="text-xs text-slate-400 max-w-[200px] mt-1">
                    Inorganic materials do not get disintegrated[cite: 53].
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-12">
            <div>
              <h2 className="text-4xl font-black mb-4">
                Structural Resilience.
              </h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                The microscopic structure of the block unlocks architectural
                capabilities traditional clay bricks simply cannot match.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-blue-500 pl-6">
                <TrendingDown className="text-blue-400 mb-3" size={28} />
                <h4 className="text-xl font-bold mb-2">Earthquake Defenses</h4>
                <p className="text-sm text-slate-400 font-light">
                  The impact of earthquake forces is proportional to structural
                  weight. [cite_start]AAC provides excellent seismic
                  resistance[cite: 48, 49].
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <Move className="text-blue-400 mb-3" size={28} />
                <h4 className="text-xl font-bold mb-2">Enhanced Carpet Area</h4>
                [cite_start]
                <p className="text-sm text-slate-400 font-light">
                  Higher wall strength in thinner walls compared to thick
                  conventional bricks, directly increasing usable floor
                  space[cite: 55, 56].
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <Shield className="text-blue-400 mb-3" size={28} />
                <h4 className="text-xl font-bold mb-2">Zero Wastage</h4>
                [cite_start]
                <p className="text-sm text-slate-400 font-light">
                  Negligible breakage drastically reduces material wastage,
                  ensuring maximum utilization of ordered stock[cite: 51].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP CTA --- */}
      <section className="py-24 text-center px-6 md:px-12 border-t border-slate-100 relative overflow-hidden">
        {/* Background image and overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/advantages/images/cta-bg.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full h-full bg-white/70"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-black text-slate-900 mb-8">
            Maximize Your Project ROI.
          </h2>
          <p className="text-lg text-slate-700 font-light mb-6">
            Discover how LEOCON AAC Blocks can dramatically reduce your
            construction costs, speed up your project timeline, and deliver
            superior safety and durability. Our team is ready to help you unlock
            the full potential of your next build.
          </p>
          <p className="text-base text-slate-600 font-light mb-8">
            Whether you’re an architect, builder, or property owner, our experts
            will guide you through every step—from material selection to
            delivery and installation. Experience the future of construction
            with innovative solutions tailored to your needs.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20leveraging%20the%20cost-saving%20advantages%20of%20AAC%20blocks.`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-slate-900 text-white font-bold py-5 px-12 rounded-full text-lg shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Connect With Sales
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
