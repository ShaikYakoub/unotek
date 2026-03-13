type Props = {
  whatsappNumber: string;
};

export default function AboutCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="py-12 md:py-20 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 md:p-12 text-center shadow-[0_20px_80px_rgba(37,99,235,0.15)]">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4">
          Partnership Desk
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
          Build The Next Landmark With Us.
        </h2>
        <p className="text-xl md:text-2xl text-blue-800 mb-8 font-light leading-relaxed">
          Partner with the Unotek team for sourcing strategy, technical
          alignment, and reliable execution support from day one.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20UNOTEK.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-[0_12px_30px_rgba(30,64,175,0.35)]"
        >
          Start Partnership Chat
        </a>
      </div>
    </section>
  );
}
