"use client";

import { motion } from "framer-motion";

export default function AdvantagesComparisonSection() {
  return (
    <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            The End of <br /> Conventional <br />
            <span className="text-blue-600">Clay Bricks.</span>
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Every cubic meter of traditional material you replace with UNOTEK
            AAC exponentially decreases your structural dead load while
            drastically accelerating your project timeline.
          </p>
          <div className="hidden lg:block w-24 h-1 bg-blue-600 mt-8"></div>
        </div>

        <div className="lg:w-2/3 space-y-32">
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
                <source src="/advantages/videos/scale.webm" type="video/webm" />
              </video>
              <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                66% Lighter
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Structural Dead-Load Relief.
            </h3>
            <p className="text-lg text-slate-600 font-light mb-6">
              UNOTEK AAC drastically lowers dead load compared to conventional
              clay bricks, enabling leaner structural systems and better seismic
              response in multi-storey construction.
            </p>
          </motion.div>

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
                <source src="/advantages/videos/fire.webm" type="video/webm" />
              </video>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Ultimate Safety Ratings.
            </h3>
            <p className="text-lg text-slate-600 font-light mb-6">
              AAC Blocks possess the highest hourly fire-resistant ratings per
              inch of any building material. It simply will not burn.
              Additionally, its porous nature provides excellent thermal and
              acoustic insulation.
            </p>
          </motion.div>

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
                  src="/advantages/videos/rapid-deployment.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Rapid Deployment.
            </h3>
            <p className="text-lg text-slate-600 font-light mb-6">
              AAC Blocks are dry and set quickly, making them a dramatically
              faster option. Because they come in pre-defined sizes and constant
              dimensions, builders minimize the time required to adjust them.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm inline-block">
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">
                35%
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Reduction in plastering & labour cost
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
