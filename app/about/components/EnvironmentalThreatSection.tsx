"use client";

import React, { useRef, useEffect } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  whatsappNumber: string;
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

export default function EnvironmentalThreatSection({ whatsappNumber }: Props) {
  return (
    <>
      {/* The Ecological Deficit Section */}
      <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <p className="w-full text-xs font-bold tracking-[0.3em] uppercase text-blue-500 md:hidden">
            ESG Insight
          </p>
          <h2 className="w-full text-4xl font-black tracking-tight text-slate-900 md:hidden">
            The Ecological Deficit.
          </h2>

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
                  src="/about/videos/thermal-power-plant-smoke.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <p className="hidden md:block text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
              ESG Insight
            </p>
            <h2 className="hidden md:block text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              The Ecological Deficit.
            </h2>
            <p className="text-xl font-light text-slate-600 leading-relaxed mb-8">
              Since 60% of the country&apos;s electricity comes from coal-based
              power stations, India has a massive stock of fly ash.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-6xl font-black text-slate-800 mb-2">
                  <AnimatedStat value={60} />M
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Tons Generated Annually
                </p>
              </div>
              <div>
                <p className="text-6xl font-black text-red-500 mb-2">
                  <AnimatedStat value={5} suffix="%" />
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Currently Consumed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Architectural Solution Section */}
      <section className="py-16 md:py-24 bg-white px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <p className="w-full text-xs font-bold tracking-[0.3em] uppercase text-blue-500 md:hidden">
            Circular Materiality
          </p>
          <h2 className="w-full text-4xl font-black tracking-tight text-slate-900 md:hidden">
            The Architectural Solution.
          </h2>

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
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="hidden md:block text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
              Circular Materiality
            </p>
            <h2 className="hidden md:block text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
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
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Partner in Sustainability
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
