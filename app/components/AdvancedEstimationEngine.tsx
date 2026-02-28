"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Send, Thermometer, BarChart3, Scale, Zap, Leaf } from "lucide-react";

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

const ESG = [
  { label: "CO₂ Avoided (kg)", icon: Leaf, getValue: (v: number) => v * 35 },
  {
    label: "Fly Ash Consumed (kg)",
    icon: BarChart3,
    getValue: (v: number) => v * 450,
  },
  {
    label: "Top-soil Saved (m²)",
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
  const [activeTab, setActiveTab] = useState<"structural" | "esg">(
    "structural",
  );

  const spec = GRADES[grade];
  const bricksReplaced = volume * 590;
  const hvacSavingLow = Math.round(volume * 0.2 * 10) / 10;
  const hvacSavingHigh = Math.round(volume * 0.3 * 10) / 10;

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
          Project ROI &amp; Impact Engine
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
        {/* ── Controls ────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-14 pb-12 border-b border-slate-100">
          {/* Volume slider */}
          <div className="w-full lg:w-1/2">
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

          {/* Grade toggle */}
          <div className="w-full lg:w-[44%]">
            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">
              Compressive Strength Grade
            </label>
            <div className="flex bg-slate-100 p-1.5 rounded-xl">
              {(Object.keys(GRADES) as GradeKey[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGrade(g)}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all text-sm ${
                    grade === g
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
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
        </div>

        {/* ── Tab switcher ─────────────────────────────────────────────────── */}
        <div className="flex gap-2 mb-10 p-1 bg-slate-100 rounded-xl w-fit">
          {(["structural", "esg"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all ${
                activeTab === tab
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab === "structural" ? "Structural ROI" : "ESG Impact"}
            </button>
          ))}
        </div>

        {/* ── Animated structural counters ─────────────────────────────────── */}
        {activeTab === "structural" && (
          <motion.div
            key="structural"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: Scale,
                  label: "Lighter Material",
                  value: 66,
                  suffix: "%",
                  color: "text-slate-900",
                },
                {
                  icon: BarChart3,
                  label: "Foundation Load Cut",
                  value: 25,
                  suffix: "%",
                  color: "text-slate-900",
                },
                {
                  icon: Zap,
                  label: "Steel Savings",
                  value: 15,
                  suffix: "%",
                  color: "text-slate-900",
                },
                {
                  icon: Leaf,
                  label: "Labour & Plastering",
                  value: 35,
                  suffix: "%",
                  color: "text-blue-600",
                },
              ].map(({ icon: Icon, label, value, suffix, color }) => (
                <div
                  key={label}
                  className="border-l-2 border-slate-200 pl-5 py-1"
                >
                  <Icon size={16} className="text-slate-400 mb-3" />
                  <p className={`text-5xl font-black mb-2 ${color}`}>
                    <AnimatedNumber value={value} suffix={suffix} />
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Dynamic brick replacement */}
            <div className="border-l-2 border-blue-200 bg-blue-50/40 rounded-r-2xl pl-6 py-5 mb-12">
              <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">
                Red Clay Bricks Eliminated for {volume} m³
              </p>
              <p className="text-4xl font-black text-blue-700">
                <AnimatedNumber value={bricksReplaced} />
              </p>
              <p className="text-sm text-blue-500/80 mt-1">
                1 m³ = 590 clay bricks
              </p>
            </div>

            {/* HVAC box */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer size={18} className="text-blue-400" />
                  <h4 className="text-lg font-bold">
                    HVAC Optimisation Analytics
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  With a thermal conductivity of{" "}
                  <strong className="text-white">{spec.thermal}</strong>, your{" "}
                  <strong className="text-white">{volume} m³</strong> project
                  typically enables a{" "}
                  <strong className="text-blue-400">20–30% reduction</strong> in
                  required HVAC tonnage — lowering both capital expenditure and
                  lifetime operational costs.
                </p>
              </div>
              <a
                href={`${whatsappLink}%20Please%20send%20me%20the%20${grade}%20specifications%20for%20a%20${volume}m3%20project.`}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-7 rounded-full text-sm transition-colors flex items-center gap-2"
              >
                Send Spec to WhatsApp <Send size={15} />
              </a>
            </div>
          </motion.div>
        )}

        {/* ── ESG Panel ────────────────────────────────────────────────────── */}
        {activeTab === "esg" && (
          <motion.div
            key="esg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-green-400 mb-6">
                Environmental Offset — {volume} m³ Project
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-8">
                {ESG.map(({ label, icon: Icon, getValue }) => (
                  <div key={label}>
                    <Icon size={18} className="text-green-400 mb-3" />
                    <p className="text-4xl font-black text-white mb-1">
                      <AnimatedNumber value={getValue(volume)} />
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl">
              India produces{" "}
              <strong className="text-slate-600">60 million tonnes</strong> of
              fly ash annually; only 5% is currently consumed across all
              sectors. By specifying Unotek AAC, your project directly converts
              industrial liability into certified structural material —
              qualifying for{" "}
              <strong className="text-slate-600">GRIHA and LEED</strong> green
              building credits.
            </p>
          </motion.div>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`${whatsappLink}%20I%20need%20${grade}%20blocks%20for%20a%20volume%20of%20${volume}%20cubic%20meters.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg transition-colors shadow-xl shadow-blue-600/20"
          >
            Request Quotation for {volume} m³ <Send size={20} />
          </motion.a>
          <p className="text-xs text-slate-400">
            Response within 2 business hours · No spam, just engineered
            solutions
          </p>
        </div>
      </motion.div>
    </div>
  );
}
