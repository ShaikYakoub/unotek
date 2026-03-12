import { productImagePrompts } from "./productImagePrompts";

const products = [
  {
    name: "AAC Blocks - 4 Inch",
    dimensions: '24" x 8" x 4"',
    useCase: "Internal partitions and low-load walls",
  },
  {
    name: "AAC Blocks - 6 Inch",
    dimensions: '24" x 8" x 6"',
    useCase: "External walls and mixed-use structures",
  },
  {
    name: "AAC Blocks - 9 Inch",
    dimensions: '24" x 8" x 9"',
    useCase: "High-load zones and industrial envelopes",
  },
];

export default function ProductsCatalogSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Available Products
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto">
            Production-ready block variants tailored for speed, insulation, and
            structural targets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-white border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm tracking-wide uppercase">
                Product Image Slot
              </div>
              <h3 className="text-2xl font-black text-slate-900 mt-5 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">
                {product.dimensions}
              </p>
              <p className="text-slate-700">{product.useCase}</p>
              <p className="text-xs text-slate-400 mt-5">
                Image prompt: {productImagePrompts[index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
