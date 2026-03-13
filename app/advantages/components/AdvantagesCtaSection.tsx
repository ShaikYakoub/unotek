type Props = {
  whatsappNumber: string;
};

export default function AdvantagesCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="py-12 md:py-20 px-6 md:px-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 md:p-12 text-center shadow-[0_20px_80px_rgba(37,99,235,0.12)]">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4">
          Commercial Impact
        </p>
        <h2 className="text-4xl font-black text-blue-900 mb-8">
          Maximize Your Project ROI.
        </h2>
        <p className="text-lg text-blue-800 font-light mb-8">
          Discover how UNOTEK AAC Blocks can dramatically reduce your
          construction costs, speed up your project timeline, and deliver
          superior safety and durability.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20leveraging%20the%20cost-saving%20advantages%20of%20AAC%20blocks.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-[0_12px_30px_rgba(30,64,175,0.35)] transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Savings Blueprint
        </a>
      </div>
    </section>
  );
}
