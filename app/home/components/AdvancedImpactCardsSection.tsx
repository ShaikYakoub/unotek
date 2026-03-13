"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Thermometer, BarChart3, Scale, Zap, Leaf } from "lucide-react";

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

export default function AdvancedImpactCardsSection({
  volume,
  thermal,
}: {
  volume: number;
  thermal: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mt-8"
    >
      <article className="bg-white rounded-3xl shadow-enterprise-lg border border-slate-100 p-8 md:p-10">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-6">
          Structural ROI
        </p>

        <div className="grid grid-cols-2 gap-8 mb-10">
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
            <div key={label} className="border-l-2 border-slate-200 pl-5 py-1">
              <Icon size={16} className="text-slate-400 mb-3" />
              <p className={`text-4xl md:text-5xl font-black mb-2 ${color}`}>
                <AnimatedNumber value={value} suffix={suffix} />
              </p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-7 flex flex-col items-start gap-5">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Thermometer size={18} className="text-blue-400" />
              <h4 className="text-lg font-bold">HVAC Optimisation Analytics</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              With a thermal conductivity of{" "}
              <strong className="text-white">{thermal}</strong>, your{" "}
              <strong className="text-white">{volume} m³</strong> project
              typically enables a{" "}
              <strong className="text-blue-400">20-30% reduction</strong> in
              required HVAC tonnage.
            </p>
          </div>
        </div>
      </article>
    </motion.section>
  );
}
