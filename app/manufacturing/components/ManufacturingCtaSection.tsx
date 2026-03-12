import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type Props = {
  whatsappNumber: string;
};

export default function ManufacturingCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="relative py-24 px-6 md:px-12 border-t border-slate-100 text-center overflow-hidden">
      <Image
        src="/manufacturing/images/cta-bg.avif"
        alt="AAC blocks background"
        fill
        className="object-cover z-0 opacity-35"
        sizes="100vw"
      />
      <div className="relative z-20 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
          Ready to Procure Enterprise-Grade Blocks?
        </h2>
        <p className="text-xl text-slate-700 mb-10 font-light">
          Our 10-step precision manufacturing guarantees absolute consistency
          across bulk orders.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%2010-step%20manufacturing%20process%20and%20would%20like%20to%20discuss%20a%20bulk%20order.`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg shadow-[0_0_40px_rgba(15,23,42,0.25)] hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          <CheckCircle2 size={22} />
          Initialize Order via WhatsApp
        </a>
      </div>
    </section>
  );
}
