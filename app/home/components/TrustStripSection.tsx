import { Wind, Shield, Zap } from "lucide-react";

const trustItems = [
  {
    icon: Wind,
    title: "66% Lighter",
    desc: "Massive reduction in foundation dead load vs red clay brick.",
  },
  {
    icon: Shield,
    title: "Ultimate Fire Safety",
    desc: "Highest fire-resistance ratings per inch — zero combustion.",
  },
  {
    icon: Zap,
    title: "Thermal Efficiency",
    desc: "Drastically reduces HVAC tonnage and lifetime operational costs.",
  },
];

export default function TrustStripSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-10 px-8 shadow-sm relative z-30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {trustItems.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center pt-6 md:pt-0 px-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-blue-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
