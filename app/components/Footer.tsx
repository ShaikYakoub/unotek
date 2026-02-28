import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-slate-100 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="text-2xl font-black tracking-tighter">UNOTEK.</h2>
          <p className="text-sm text-slate-400 mt-1 font-light">
            Premium AAC Blocks — Engineered for the Future.
          </p>
          <div className="mt-4 flex justify-start">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-sm bg-blue-600 text-white font-bold py-2.5 px-6 rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
        <nav className="w-full grid grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col gap-2">
            <a
              href="/"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-3 py-1 rounded"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-3 py-1 rounded"
            >
              About Us
            </a>
            <a
              href="/calculator"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-3 py-1 rounded"
            >
              Calculator
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="/advantages"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-3 py-1 rounded"
            >
              Advantages
            </a>
            <a
              href="/technical"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-3 py-1 rounded"
            >
              Technical Spec
            </a>
            <a
              href="/manufacturing"
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-3 py-1 rounded"
            >
              Manufacturing
            </a>
          </div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100">
        <p className="text-base md:text-lg font-semibold text-slate-400 text-center">
          © {new Date().getFullYear()} Unotek. All rights reserved.
        </p>
        <div className="flex justify-center items-center mt-4">
          <span className="text-base md:text-lg font-semibold text-slate-500 bg-blue-50 px-4 py-2 rounded-full shadow inline-flex items-center gap-2">
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
