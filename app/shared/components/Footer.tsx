import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-white border-t border-slate-100 px-8 md:px-24 pt-16 pb-10 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_1fr] gap-12 pb-10">
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
          <div className="mt-6 flex flex-col items-start gap-4">
            <a
              href="https://wa.me/9515168868?text=Hello,%20I%20am%20inquiring%20from%20your%20website."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 text-sm bg-blue-600 text-white font-bold py-3 px-5 rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors w-fit"
            >
              <MessageCircle size={18} />
              Chat with us
            </a>
            <div className="text-xs text-slate-500">
              Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM
            </div>
          </div>
        </div>

        <nav className="w-full md:max-w-sm">
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-slate-900 mb-5">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/advantages"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              Advantages
            </Link>
            <Link
              href="/products"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/manufacturing"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              Manufacturing
            </Link>
            <Link
              href="#site-footer"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

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

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm md:text-base font-semibold text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} Unotek. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end items-center">
          <span className="text-sm md:text-base font-semibold text-slate-500 bg-blue-50 px-4 py-2 rounded-full shadow inline-flex items-center gap-2">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-red-500 mx-1"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            by{" "}
            <a
              href="#"
              className="font-bold text-blue-600 underline hover:text-blue-800"
            >
              Maveric Techsolutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
