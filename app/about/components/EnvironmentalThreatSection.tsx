"use client";

import React, { useRef, useEffect } from "react";
import { motion, animate, useInView, type MotionValue } from "framer-motion";

type Props = {
  problemOpacity: MotionValue<number>;
  solutionOpacity: MotionValue<number>;
  solutionY: MotionValue<number>;
  whatsappNumber: string;
  containerRef: React.RefObject<HTMLElement | null>;
};

function AnimatedStat({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
}

export default function EnvironmentalThreatSection({
  problemOpacity,
  solutionOpacity,
  solutionY,
  whatsappNumber,
  containerRef,
}: Props) {
  return (
    <section ref={containerRef} className="relative h-[200vh] bg-slate-50">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply z-0"
        >
          <source
            src="/about/videos/thermal-power-plant-smoke.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/80 z-10"></div>

        <motion.div
          style={{ opacity: problemOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-8">
              The Ecological Deficit.
            </h2>
            <p className="text-2xl font-light text-slate-600 leading-relaxed mb-12">
              Since 60% of the country&apos;s electricity comes from coal-based
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

        <motion.div
          style={{ opacity: solutionOpacity, y: solutionY }}
          className="absolute inset-0 flex items-center justify-center bg-white px-6"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex items-center justify-center relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                >
                  <source
                    src="/about/videos/aac-texture-loop.webm"
                    type="video/webm"
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
                superiority. Fly-Ash is our primary raw material, constituting a
                massive{" "}
                <strong className="text-blue-600 font-black text-2xl">
                  70% proportion
                </strong>{" "}
                in every AAC Block we manufacture.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20your%20eco-friendly%20AAC%20blocks.`}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-slate-900 text-slate-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Partner in Sustainability
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
