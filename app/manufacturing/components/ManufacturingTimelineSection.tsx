import Image from "next/image";
import { Factory } from "lucide-react";

type ProcessStep = {
  id: number;
  phaseName: string;
  title: string;
  desc: string;
};

type Props = {
  processSteps: ProcessStep[];
  stepMedia: Record<number, { type: string; src: string }>;
};

export default function ManufacturingTimelineSection({
  processSteps,
  stepMedia,
}: Props) {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {processSteps.map((step) => {
          const media = stepMedia[step.id] || {
            type: "image",
            src: "/manufacturing/images/blocks-yard.avif",
          };

          return (
            <article
              key={step.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="relative h-52 bg-slate-100">
                {media.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={media.src} type="video/webm" />
                  </video>
                ) : (
                  <Image
                    src={media.src}
                    alt={`${step.title} visual`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <span className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800 shadow-sm">
                  {step.phaseName}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {step.desc}
                </p>

                {step.id === 9 && (
                  <div className="mt-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                      <Factory size={16} /> Autoclave Telemetry
                    </h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-lg font-black text-slate-900">12h</p>
                        <p className="text-xs text-slate-500 uppercase">
                          Curing
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-slate-900">
                          1.2 Mpa
                        </p>
                        <p className="text-xs text-slate-500 uppercase">
                          Pressure
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-slate-900">
                          185°C
                        </p>
                        <p className="text-xs text-slate-500 uppercase">Temp</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
