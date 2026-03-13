"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Send, Thermometer, BarChart3, Leaf } from "lucide-react";
import AdvancedImpactCardsSection from "@/app/home/components/AdvancedImpactCardsSection";

// ─── Animated Counter ─────────────────────────────────────────────────────── //
function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// ─── Grade specs (based on Unotek data) ───────────────────────────────────── //
const GRADES = {
  "Grade 1": {
    label: "Grade 1",
    strength: "2.0 N/mm²",
    density: "451–550 kg/m³",
    thermal: "0.21 W/m·K",
    thermalVal: 0.21,
    use: "Partition walls, cladding & non-structural infill",
  },
  "Grade 2": {
    label: "Grade 2",
    strength: "3.0 N/mm²",
    density: "551–650 kg/m³",
    thermal: "0.24 W/m·K",
    thermalVal: 0.24,
    use: "Load-bearing & high-rise structural applications",
  },
} as const;

type GradeKey = keyof typeof GRADES;
type BlockSizeKey = "4 Inch" | "6 Inch" | "9 Inch";

const BLOCK_YIELD_PER_M3: Record<BlockSizeKey, number> = {
  "4 Inch": 83,
  "6 Inch": 55,
  "9 Inch": 36,
};

const BLOCK_LABELS: Record<BlockSizeKey, string> = {
  "4 Inch": '4"',
  "6 Inch": '6"',
  "9 Inch": '9"',
};

const ESG = [
  { label: "CO2 Avoided (kg)", icon: Leaf, getValue: (v: number) => v * 35 },
  {
    label: "Fly Ash Consumed (kg)",
    icon: BarChart3,
    getValue: (v: number) => v * 450,
  },
  {
    label: "Top-soil Saved (m2)",
    icon: Thermometer,
    getValue: (v: number) => Math.round(v * 2.1),
  },
];

// ─── Component ────────────────────────────────────────────────────────────── //
export default function AdvancedEstimationEngine({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  const [volume, setVolume] = useState<number>(100);
  const [grade, setGrade] = useState<GradeKey>("Grade 1");
  const [blockSize, setBlockSize] = useState<BlockSizeKey>("6 Inch");

  const spec = GRADES[grade];
  const bricksReplaced = volume * 590;
  const blocksRequired = volume * BLOCK_YIELD_PER_M3[blockSize];

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-24 font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
          Enterprise Tools
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
          Project&nbsp;&nbsp;ROI&nbsp; &amp; &nbsp;Impact&nbsp;&nbsp;Engine
        </h2>
        <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          Set your volume and structural grade to instantly calculate savings,
          ESG credits, and HVAC optimisation data.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="bg-white rounded-3xl shadow-enterprise-lg border border-slate-100 p-8 md:p-16"
      >
        {/* Dynamic brick replacement */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-12">
          <div className="border-l-2 border-blue-200 bg-blue-50/40 rounded-r-2xl pl-6 py-5">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">
              Red Clay Bricks
            </p>
            <p className="text-4xl font-black text-blue-700">
              <AnimatedNumber value={bricksReplaced} />
            </p>
            <p className="text-sm text-blue-500/80 mt-1">
              1 m³ = 590 clay bricks
            </p>
          </div>
          <div className="border-r-2 border-slate-300 bg-slate-100 rounded-l-2xl pl-6 py-5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
              AAC Blocks ({BLOCK_LABELS[blockSize]})
            </p>
            <p className="text-4xl font-black text-slate-900">
              <AnimatedNumber value={blocksRequired} />
            </p>
            <p className="text-sm text-slate-500/90 mt-1">
              1 m³ = {BLOCK_YIELD_PER_M3[blockSize]} AAC blocks
            </p>
          </div>
        </div>

        {/* ── Controls ────────────────────────────────────────────────────── */}
        <div className="mb-14 pb-12 border-b border-slate-100 space-y-10">
          {/* Volume slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="w-full lg:col-span-8">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Required Volume
                </label>
                <div>
                  <span className="text-4xl font-black text-blue-600 tabular-nums">
                    {volume}
                  </span>
                  <span className="text-base text-slate-400 ml-1">m³</span>
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full"
                aria-label="Project volume in cubic metres"
              />
              <div className="flex justify-between mt-1.5 text-xs text-slate-400 font-medium">
                <span>10 m³</span>
                <span>500 m³</span>
                <span>1,000 m³</span>
              </div>
            </div>

            <div className="w-full lg:col-span-4">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Block Size
              </label>
              <div className="flex bg-blue-50 p-1.5 rounded-xl border border-blue-100">
                {(Object.keys(BLOCK_YIELD_PER_M3) as BlockSizeKey[]).map(
                  (size) => (
                    <button
                      key={size}
                      onClick={() => setBlockSize(size)}
                      className={`flex-1 py-3 px-3 rounded-lg font-bold transition-all text-sm ${
                        blockSize === size
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-blue-700 hover:text-blue-800"
                      }`}
                    >
                      {BLOCK_LABELS[size]}
                    </button>
                  ),
                )}
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Yield basis: {BLOCK_YIELD_PER_M3[blockSize]} blocks / m³
              </p>
            </div>
          </div>

          {/* Grade toggle */}
          <div className="w-full">
            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">
              Compressive Strength Grade
            </label>
            <div className="flex bg-blue-50 p-1.5 rounded-xl border border-blue-100 w-full">
              {(Object.keys(GRADES) as GradeKey[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGrade(g)}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all text-sm md:text-base ${
                    grade === g
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-blue-700 hover:text-blue-800"
                  }`}
                >
                  {g} &nbsp;
                  <span className="font-normal opacity-70">
                    ({GRADES[g].strength})
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
              <span>
                Density:{" "}
                <strong className="text-slate-800">{spec.density}</strong>
              </span>
              <span>
                Thermal:{" "}
                <strong className="text-slate-800">{spec.thermal}</strong>
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400 italic">{spec.use}</p>
          </div>

          <a
            href={`${whatsappLink}%20Please%20send%20me%20the%20${grade}%20specifications%20for%20a%20${volume}m3%20project.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-7 rounded-full text-sm transition-colors"
          >
            Send Specs <Send size={15} />
          </a>

          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-green-400 mb-6">
              ESG Impact
            </p>
            <p className="text-sm text-slate-400 mb-6">
              Environmental Offset - {volume} m³ Project
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-8 mb-8">
              {ESG.map(({ label, icon: Icon, getValue }) => (
                <div key={label}>
                  <Icon size={18} className="text-green-400 mb-3" />
                  <p className="text-4xl font-black text-white mb-1">
                    <AnimatedNumber value={getValue(volume)} />
                  </p>
                  <p className="text-sm text-slate-400 font-medium">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl">
              India produces 60 million tonnes of fly ash annually; only 5% is
              currently consumed across all sectors. By specifying Unotek AAC,
              your project directly converts industrial liability into certified
              structural material, qualifying for GRIHA and LEED green building
              credits.
            </p>
          </div>
        </div>
      </motion.div>

      <AdvancedImpactCardsSection volume={volume} thermal={spec.thermal} />
    </div>
  );
}
