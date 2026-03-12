import Image from "next/image";

type Props = {
  whatsappBase: string;
};

export default function HomeCtaSection({ whatsappBase }: Props) {
  return (
    <section className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <Image
          src="/homepage/images/cta-bg.avif"
          alt="Homepage CTA Background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Build with Unotek.
        </h2>
        <p className="text-xl md:text-2xl text-slate-700 mb-8 font-light leading-relaxed">
          Ready to engineer your next project with premium AAC blocks? Connect
          with our team for procurement, partnership, or technical support.
        </p>
        <a
          href={whatsappBase}
          target="_blank"
          rel="noreferrer"
          className="inline-block border-2 border-slate-900 text-slate-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
