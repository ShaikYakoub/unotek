type Props = {
  whatsappNumber: string;
};

export default function ProductsCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="py-12 md:py-20 text-center px-6 md:px-24 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 md:p-12 shadow-[0_20px_80px_rgba(37,99,235,0.12)]">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4">
          Project Advisory
        </p>
        <h2 className="text-4xl font-black text-blue-900 mb-6">
          Need Product-Mix Guidance?
        </h2>
        <p className="text-xl text-blue-800 font-light">
          Share your project type and target volume to receive a recommended
          product split, quantity estimate, and dispatch plan.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20help%20selecting%20the%20right%20AAC%20products%20for%20my%20project.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 text-white font-bold py-3 px-8 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-[0_12px_30px_rgba(30,64,175,0.35)] hover:bg-blue-800 transition-all duration-300 mt-8"
        >
          Build My Product Mix
        </a>
      </div>
    </section>
  );
}
