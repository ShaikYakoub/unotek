import Image from "next/image";

type Props = {
  whatsappNumber: string;
};

export default function AdvantagesCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="py-24 text-center px-6 md:px-12 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/advantages/images/cta-bg.avif"
          alt="CTA Background"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-black text-slate-900 mb-8">
          Maximize Your Project ROI.
        </h2>
        <p className="text-lg text-slate-700 font-light mb-6">
          Discover how UNOTEK AAC Blocks can dramatically reduce your
          construction costs, speed up your project timeline, and deliver
          superior safety and durability.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20leveraging%20the%20cost-saving%20advantages%20of%20AAC%20blocks.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 hover:bg-slate-900 text-white font-bold py-3 px-6 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300 transform hover:-translate-y-1"
        >
          Connect With Sales
        </a>
      </div>
    </section>
  );
}
