type Props = {
  whatsappBase: string;
};

export default function HomeCtaSection({ whatsappBase }: Props) {
  return (
    <section className="px-6 md:px-24 pt-2 md:pt-4 pb-10 md:pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 md:p-12 text-center shadow-[0_20px_80px_rgba(37,99,235,0.12)]">
        <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
          Build with Unotek.
        </h2>
        <p className="text-xl md:text-2xl text-blue-800 mb-8 font-light leading-relaxed">
          Ready to engineer your next project with premium AAC blocks? Connect
          with our team for procurement, partnership, or technical support.
        </p>
        <a
          href={whatsappBase}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-[0_12px_30px_rgba(30,64,175,0.35)]"
        >
          Chat With Unotek Team
        </a>
      </div>
    </section>
  );
}
