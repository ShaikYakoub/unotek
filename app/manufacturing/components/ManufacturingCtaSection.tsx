import { CheckCircle2 } from "lucide-react";

type Props = {
  whatsappNumber: string;
};

export default function ManufacturingCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="py-12 md:py-20 px-6 md:px-24 border-t border-slate-100 bg-white text-center">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 md:p-12 shadow-[0_20px_80px_rgba(37,99,235,0.12)]">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4">
          Operations Ready
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-8">
          Ready to Procure Enterprise-Grade Blocks?
        </h2>
        <p className="text-xl text-blue-800 mb-10 font-light">
          Our 10-step precision manufacturing guarantees absolute consistency
          across bulk orders.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%2010-step%20manufacturing%20process%20and%20would%20like%20to%20discuss%20a%20bulk%20order.`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-blue-700 text-white font-bold py-3 px-8 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-[0_12px_30px_rgba(30,64,175,0.35)] hover:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1"
        >
          <CheckCircle2 size={22} />
          Request Bulk Dispatch Plan
        </a>
      </div>
    </section>
  );
}
