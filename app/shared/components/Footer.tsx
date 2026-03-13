import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-white border-t border-slate-100 px-6 md:px-24 pt-12 md:pt-16 pb-8 md:pb-10 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 pb-8 md:pb-10">
        <div className="max-w-md sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.avif"
              alt="Unotek logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <h2 className="text-2xl font-black tracking-tighter text-slate-950">
              UNOTEK.
            </h2>
          </div>
          <p className="text-lg font-semibold text-slate-900 leading-relaxed">
            Premium AAC Blocks — Engineered for the Future.
          </p>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            Precision-manufactured AAC blocks for faster builds, lower dead
            load, and enterprise-grade project performance.
          </p>
          <div className="mt-6 flex flex-col items-start gap-2">
            <div className="text-xs text-slate-500">
              Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-slate-900 mb-5">
            Contact
          </h3>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-blue-600 mt-0.5 flex-shrink-0"
              />
              <p className="leading-relaxed">
                Plot 165, YSR Jagananna Mega Industrial Hub, Kopparthy, Phase 1,
                YSR Dist. Kadapa, AP - 516003
              </p>
            </div>
            <a
              href="tel:+919515168868"
              className="flex items-center gap-3 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Phone size={18} className="text-blue-600 flex-shrink-0" />
              +91-95151 68868
            </a>
            <a
              href="mailto:info@unotek.in"
              className="flex items-center gap-3 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={18} className="text-blue-600 flex-shrink-0" />
              info@unotek.in
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 md:pt-8 border-t border-slate-100 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm md:text-base font-semibold text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} Unotek. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end items-center">
          <span className="text-xs sm:text-sm font-semibold text-slate-600 bg-blue-50/80 px-3.5 py-2.5 rounded-2xl border border-blue-100 inline-flex items-center gap-2 text-center sm:text-left">
            Website by
            <span className="font-bold text-blue-700">
              Maverick Tecnovations
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
