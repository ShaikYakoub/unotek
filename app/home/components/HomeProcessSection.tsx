"use client";

import { motion } from "framer-motion";

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  video: string;
  imageRight: boolean;
};

type Props = {
  processSteps: ProcessStep[];
};

export default function HomeProcessSection({ processSteps }: Props) {
  return (
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
          {processSteps.map((step) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
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
                className={`h-[420px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl ${
                  step.imageRight ? "order-2 md:order-1" : ""
                }`}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  key={step.video}
                >
                  <source src={step.video} type="video/webm" />
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
