"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import {
  MapPin,
  Factory,
  Droplets,
  Zap,
  ShieldCheck,
  Maximize2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- Animated Counter Sub-Component ---
const AnimatedStat = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useRef(0);
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default function PremiumAboutPage() {
  const whatsappNumber = "9515168868";
  const containerRef = useRef(null);

  // Scroll logic for the Environmental Threat section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Crossfade opacities based on scroll depth
  const problemOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    [1, 1, 0],
  );
  const solutionOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.6, 1],
    [0, 1, 1],
  );
  const solutionY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  return (
    <>
      <Navbar />
      <div className="font-sans text-slate-900 bg-white min-h-screen">
        {/* --- CINEMATIC HERO (6s Video Loop) --- */}
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-100 pt-20">
          <div className="absolute inset-0 z-0">
            {/* Hero Background Video (if available) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30 mix-blend-multiply"
              poster="/about/images/hero-bg.png"
            >
              <source src="/about/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Fallback Hero Image if video not available */}
            <img
              src="/about/images/hero-bg.png"
              alt="About Hero Background"
              className="w-full h-full object-cover absolute inset-0 opacity-30 mix-blend-multiply"
              style={{ zIndex: -1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white z-10"></div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"></span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Spearheaded by Mr. Siva Prasad of Iyantra Industries, we are
                pioneering next-generation AAC manufacturing.
              </p>
              <div className="inline-flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase text-slate-500 bg-white/80 backdrop-blur-md py-3 px-6 rounded-full border border-slate-200 shadow-sm">
                <MapPin className="text-blue-600" size={18} />
                Plot 165, YSR Jagananna Mega Industrial Hub, Kopparthy, Phase 1, YSR Dist. Kadapa, AP - 516003
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- STICKY SCROLL: THE ENVIRONMENTAL THREAT & SOLUTION --- */}
        <section ref={containerRef} className="relative h-[200vh] bg-slate-50">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
            {/* Background video for Ecological Deficit */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply z-0"
            >
              <source
                src="/about/videos/thermal-power-plant-smoke.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white z-10"></div>
            {/* THE PROBLEM LAYER */}
            <motion.div
              style={{ opacity: problemOpacity }}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-8">
                  The Ecological Deficit.
                </h2>
                <p className="text-2xl font-light text-slate-600 leading-relaxed mb-12">
                  Since 60% of the country's electricity comes from coal-based
                  power stations, India has a massive stock of fly ash.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-7xl font-black text-slate-800 mb-2">
                      <AnimatedStat value={60} />M
                    </p>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                      Tons Generated Annually
                    </p>
                  </div>
                  <div>
                    <p className="text-7xl font-black text-red-500 mb-2">
                      <AnimatedStat value={5} suffix="%" />
                    </p>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                      Currently Consumed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* THE SOLUTION LAYER */}
            <motion.div
              style={{ opacity: solutionOpacity, y: solutionY }}
              className="absolute inset-0 flex items-center justify-center bg-white px-6"
            >
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                  {/* 🎬 Video Prompt: Extreme macro 6s loop of pristine white AAC block texture rotating slowly */}
                  <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex items-center justify-center relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    >
                      <source
                        src="/about/videos/aac-texture-loop.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <span className="text-slate-400 font-bold uppercase tracking-widest absolute z-20">
                      AAC Texture Loop
                    </span>
                    <div className="absolute inset-0 bg-blue-600/5 z-10 mix-blend-multiply"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                    The Architectural Solution.
                  </h2>
                  <p className="text-xl font-light text-slate-600 leading-relaxed mb-8">
                    We transform this environmental threat into structural
                    superiority. Fly-Ash is our primary raw material,
                    constituting a massive{" "}
                    <strong className="text-blue-600 font-black text-2xl">
                      70% proportion
                    </strong>{" "}
                    in every AAC Block we manufacture.
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20your%20eco-friendly%20AAC%20blocks.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border-2 border-slate-900 text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"
                  >
                    Partner in Sustainability
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- INTERACTIVE PLANT BLUEPRINT --- */}
        <section className="py-32 bg-slate-50 border-t border-slate-200 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                Enterprise Performance Scale.
              </h2>
              <p className="text-xl font-light text-slate-500 max-w-3xl mx-auto">
                Our 57m x 21.19m facility is engineered for a 50m³ daily
                capacity, expandable to 100m³.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Architectural Blueprint Diagram */}
              <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-6 left-6 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest z-10">
                  <Maximize2 size={14} /> Blueprint Schematic
                </div>
                {/* Contextual Diagram Tag Request */}
                <div className="w-full h-[500px] bg-slate-50 flex items-center justify-center rounded-xl border border-slate-200 relative overflow-hidden">
                  <img
                    src="/about/images/plant-blueprint.png"
                    alt="Plant Blueprint Schematic"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <span className="text-slate-400 absolute bottom-4 left-4 bg-white/80 px-3 py-1 rounded-full">
                    {/* citation removed */}
                  </span>
                </div>
              </div>

              {/* Interactive Specs Data Menu */}
              <div className="lg:col-span-4 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <Factory size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase">
                      Annual Yield
                    </h3>
                  </div>
                  <p className="text-3xl font-black text-slate-900 mb-1">
                    15,000{" "}
                    <span className="text-lg text-slate-500 font-medium">
                      m³
                    </span>
                  </p>
                  <p className="text-sm text-slate-500 font-light">
                    Calculated across 300 active working days per annum.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase">
                      Power Matrix
                    </h3>
                  </div>
                  <p className="text-3xl font-black text-slate-900 mb-1">
                    150{" "}
                    <span className="text-lg text-slate-500 font-medium">
                      HP
                    </span>
                  </p>
                  <p className="text-sm text-slate-500 font-light">
                    Supported by a dedicated 120KVA Generator for uninterrupted
                    runs.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <Droplets size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase">
                      Hydration Spec
                    </h3>
                  </div>
                  <p className="text-3xl font-black text-slate-900 mb-1">
                    15,000{" "}
                    <span className="text-lg text-slate-500 font-medium">
                      Liters
                    </span>
                  </p>
                  <p className="text-sm text-slate-500 font-light">
                    Fresh soft water required per day for precision slurry
                    mixture.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* --- ABOUT US CTA SECTION --- */}
        <section className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full object-cover z-0">
            <img
              src="/about/images/cta-bg.png"
              alt="About Us CTA Background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
              Ready to Build the Future?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed drop-shadow-md">
              Join us in redefining sustainable performance. Connect with our
              team to explore partnership, investment, or career opportunities
              at UNOTEK.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20UNOTEK.`}
              target="_blank"
              rel="noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-lg"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
