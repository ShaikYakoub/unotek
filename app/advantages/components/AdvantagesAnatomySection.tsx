import Image from "next/image";
import { TrendingDown, Move, Shield, BugOff } from "lucide-react";

export default function AdvantagesAnatomySection() {
  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="md:w-1/2 relative group cursor-crosshair">
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
            Hover to Inspect Structure
          </h3>

          <div className="relative w-full aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <Image
              src="/advantages/images/aac-honeycomb-studio-cut.avif"
              alt="AAC Honeycomb Studio Cut"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <BugOff className="text-blue-400 mx-auto mb-2" size={24} />
                <p className="font-bold">Termite Free</p>
                <p className="text-xs text-slate-400 max-w-[200px] mt-1">
                  Inorganic materials do not get disintegrated.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-12">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-3">
              Performance Anatomy
            </p>
            <h2 className="text-4xl font-black mb-4">Structural Resilience.</h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              The microscopic structure of the block unlocks architectural
              capabilities traditional clay bricks simply cannot match.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-l-2 border-blue-500 pl-6">
              <TrendingDown className="text-blue-400 mb-3" size={28} />
              <h4 className="text-xl font-bold mb-2">Earthquake Defenses</h4>
              <p className="text-sm text-slate-400 font-light">
                The impact of earthquake forces is proportional to structural
                weight. AAC provides excellent seismic resistance.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-6">
              <Move className="text-blue-400 mb-3" size={28} />
              <h4 className="text-xl font-bold mb-2">Enhanced Carpet Area</h4>
              <p className="text-sm text-slate-400 font-light">
                Higher wall strength in thinner walls compared to thick
                conventional bricks, directly increasing usable floor space.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-6">
              <Shield className="text-blue-400 mb-3" size={28} />
              <h4 className="text-xl font-bold mb-2">Zero Wastage</h4>
              <p className="text-sm text-slate-400 font-light">
                Negligible breakage drastically reduces material wastage,
                ensuring maximum utilization of ordered stock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
