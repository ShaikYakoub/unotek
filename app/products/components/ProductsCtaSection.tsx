type Props = {
  whatsappNumber: string;
};

export default function ProductsCtaSection({ whatsappNumber }: Props) {
  return (
    <section
      className="py-28 text-center px-6 md:px-12 border-t border-slate-100 bg-[url('/technical/images/cta-bg.avif')] bg-cover bg-center"
      style={{ position: "relative" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-6">
          Need Product-Mix Guidance?
        </h2>
        <p className="text-xl text-slate-700 font-light">
          Share your project type and target volume to receive a recommended
          product split, quantity estimate, and dispatch plan.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20help%20selecting%20the%20right%20AAC%20products%20for%20my%20project.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-slate-900 text-white font-bold py-3 px-6 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-xl hover:bg-blue-700 transition-all duration-300 mt-8"
        >
          Talk to Product Team
        </a>
      </div>
    </section>
  );
}
