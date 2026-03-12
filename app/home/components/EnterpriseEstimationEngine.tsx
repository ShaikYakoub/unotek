"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Leaf, BarChart3, Zap, Scale } from "lucide-react";

interface EngineProps {
  whatsappLink: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────── //
const metrics = [
  {
    key: "weight",
    label: "Weight Reduction",
    value: "66%",
    icon: Scale,
    desc: "Lighter than conventional clay bricks",
    dynamic: false,
    color: "text-slate-900",
    border: "border-slate-200",
  },
  {
    key: "steel",
    label: "Steel Savings",
    value: "15%",
    icon: BarChart3,
    desc: "Reduction in structural steel usage",
    dynamic: false,
    color: "text-slate-900",
    border: "border-slate-200",
  },
  {
    key: "labour",
    label: "Labour Savings",
    value: "35%",
    icon: Zap,
    desc: "Reduction in plastering & labour cost",
    dynamic: false,
    color: "text-slate-900",
    border: "border-slate-200",
  },
  {
    key: "bricks",
    label: "Red Bricks Replaced",
    value: null, // computed
    icon: Leaf,
    desc: "1 m³ = 590 clay bricks eliminated",
    dynamic: true,
    color: "text-blue-700",
    border: "border-blue-200 bg-blue-50/50",
  },
];

const ESG_DATA = [
  {
    label: "CO₂ Avoided (kg)",
    getValue: (v: number) => (v * 35).toLocaleString(),
  },
  {
    label: "Fly Ash Consumed (kg)",
    getValue: (v: number) => (v * 450).toLocaleString(),
  },
  {
    label: "Top-soil Saved (m²)",
    getValue: (v: number) => (v * 2.1).toFixed(1),
  },
];

export default function EnterpriseEstimationEngine({
  whatsappLink,
}: EngineProps) {
  const [volume, setVolume] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<"structural" | "esg">(
    "structural",
  );

  const bricksReplaced = useMemo(
    () => (volume * 590).toLocaleString(),
    [volume],
  );

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
          Enterprise Impact Engine
        </h2>
        <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          Calculate the structural savings and environmental offset for your
          next large-scale development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="bg-white rounded-3xl shadow-enterprise-lg border border-slate-100 p-8 md:p-16"
      >
        {/* ── Volume slider ──────────────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex justify-between items-end mb-5 flex-wrap gap-4">
            <label className="text-xl md:text-2xl font-bold text-slate-900">
              Project Volume Requirements
            </label>
            <div className="text-right">
              <span className="text-4xl md:text-5xl font-black text-blue-600 tabular-nums">
                {volume}
              </span>
              <span className="text-xl text-slate-400 ml-2">m³</span>
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
          <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
            <span>10 m³</span>
            <span>500 m³</span>
            <span>1,000 m³</span>
          </div>
        </div>

        {/* ── Tab switcher ───────────────────────────────────────────────────── */}
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

        {/* ── Metrics ────────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {activeTab === "structural" ? (
            <motion.div
              key="structural"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
            >
              {metrics.map(
                ({
                  key,
                  label,
                  value,
                  icon: Icon,
                  desc,
                  dynamic,
                  color,
                  border,
                }) => (
                  <div
                    key={key}
                    className={`border-l-2 ${border} pl-6 py-2 rounded-r-xl`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} className="text-slate-400" />
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        {label}
                      </p>
                    </div>
                    <p
                      className={`text-4xl font-black mb-1.5 tabular-nums ${color}`}
                    >
                      {dynamic ? bricksReplaced : value}
                    </p>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                ),
              )}
            </motion.div>
          ) : (
            <motion.div
              key="esg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mb-14"
            >
              <div className="bg-slate-900 text-white rounded-2xl p-8 mb-6">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-green-400 mb-4">
                  Environmental Offset — {volume} m³ Project
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-8">
                  {ESG_DATA.map(({ label, getValue }) => (
                    <div key={label}>
                      <p className="text-3xl font-black text-white mb-1 tabular-nums">
                        {getValue(volume)}
                      </p>
                      <p className="text-sm text-slate-400 font-medium">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-3xl">
                The country produces 60 million tonnes of fly ash annually; only
                5% is currently consumed across all sectors. By specifying AAC,
                your project directly converts this industrial liability into
                certified structural material — qualifying for GRIHA and LEED
                green building credits.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={`${whatsappLink}%20Specifically,%20I%20am%20looking%20at%20a%20volume%20of%20${volume}%20cubic%20meters.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-full text-lg transition-colors shadow-xl shadow-blue-600/20"
          >
            Request Quotation for {volume} m³ <Send size={20} />
          </motion.a>
          <p className="text-xs text-slate-400">
            Response within 2 business hours &nbsp;·&nbsp; No spam, just
            engineered solutions
          </p>
        </div>
      </motion.div>
    </div>
  );
}
