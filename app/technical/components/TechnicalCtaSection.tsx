type Props = {
  whatsappNumber: string;
};

export default function TechnicalCtaSection({ whatsappNumber }: Props) {
  return (
    <section className="py-12 md:py-20 text-center px-6 md:px-24 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 md:p-12 shadow-[0_20px_80px_rgba(37,99,235,0.12)]">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4">
          Technical Support
        </p>
        <h2 className="text-4xl font-black text-blue-900 mb-6">
          Require Project-Specific Tolerances?
        </h2>
        <p className="text-xl text-blue-800 font-light">
          Send these exact engineering specs to our procurement team for a
          customized volume breakdown and logistics check.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20have%20reviewed%20your%20technical%20specifications%20and%20need%20a%20consultation%20on%20grade%20requirements.`}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 text-white font-bold py-3 px-8 md:py-5 md:px-12 rounded-full text-base md:text-lg shadow-[0_12px_30px_rgba(30,64,175,0.35)] hover:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1 mt-8"
        >
          Request Technical Review
        </a>
      </div>
    </section>
  );
}
