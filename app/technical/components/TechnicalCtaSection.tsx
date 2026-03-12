type Props = {
  whatsappNumber: string;
};

export default function TechnicalCtaSection({ whatsappNumber }: Props) {
  return (
    <section
      className="py-36 text-center px-6 md:px-12 border-t border-slate-800 relative overflow-hidden bg-[url('/technical/images/cta-bg.avif')] bg-cover bg-center"
      style={{ position: "relative" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-6">
          Require Project-Specific Tolerances?
        </h2>
        <p className="text-xl text-slate-700 font-light">
          Send these exact engineering specs to our procurement team for a
          customized volume breakdown and logistics check.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%20technical%20specifications%20and%20need%20a%20consultation%20on%20grade%20requirements.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-slate-900 text-white font-bold py-3 px-6 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 mt-8"
        >
          Consult Engineering Desk
        </a>
      </div>
    </section>
  );
}
