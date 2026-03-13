"use client";

import { motion } from "framer-motion";
import { Ruler, Box } from "lucide-react";

type BlockSize = "4 Inch" | "6 Inch" | "9 Inch";

type BlockInfo = {
  dim: string;
  yield: number;
  rate: string;
  avg: string;
  previewHeight: number;
  useCase: string;
};

type Props = {
  activeSize: BlockSize;
  setActiveSize: (size: BlockSize) => void;
  blockData: Record<BlockSize, BlockInfo>;
};

export default function ProductsDataSection({
  activeSize,
  setActiveSize,
  blockData,
}: Props) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-8 md:space-y-10 z-10">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
              Selection Tools
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200 text-blue-600">
                <Ruler size={24} />
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900">
                Product Selector
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-light">
              Compare available sizes, yields, and indicative market rates to
              choose the right product for your project package.
            </p>
          </div>

          <div className="flex gap-4 p-2 bg-white rounded-2xl border border-slate-200 shadow-sm w-full max-w-md">
            {(["4 Inch", "6 Inch", "9 Inch"] as const).map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all text-sm uppercase tracking-wide ${
                  activeSize === size
                    ? "bg-slate-900 text-white shadow-md transform scale-[1.02]"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                Dimensions
              </p>
              <p className="text-2xl font-black text-slate-900">
                {blockData[activeSize].dim}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-b-4 border-b-blue-600">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                Yield / m3
              </p>
              <motion.p
                key={activeSize}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black text-blue-600"
              >
                {blockData[activeSize].yield}{" "}
                <span className="text-lg text-slate-500 font-medium">
                  blocks
                </span>
              </motion.p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                Market Rate
              </p>
              <p className="text-xl font-bold text-slate-900">
                {blockData[activeSize].rate}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                Avg. Value
              </p>
              <p className="text-xl font-bold text-slate-900">
                {blockData[activeSize].avg}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
              Recommended Use
            </p>
            <p className="text-base text-slate-700">
              {blockData[activeSize].useCase}
            </p>
          </div>
        </div>

        <div className="relative h-[250px] flex items-center justify-center bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="absolute top-6 left-6 text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Box size={16} /> Live Size Preview
          </div>
          <div className="relative w-[300px] h-[120px] flex items-center justify-center">
            <motion.div
              initial={false}
              animate={{
                width: 300,
                height: blockData[activeSize].previewHeight,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-slate-200 border-2 border-slate-300 rounded-lg shadow-inner flex items-center justify-center"
            />
            <span
              className="font-black text-slate-500 text-2xl z-20 pointer-events-none"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.5rem",
              }}
            >
              {activeSize}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
