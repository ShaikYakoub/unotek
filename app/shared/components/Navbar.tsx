"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

type NavLink = {
  name: string;
  path: string;
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappNumber = "9515168868";

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Advantages", path: "/advantages" },
    { name: "Manufacturing", path: "/manufacturing" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-4">
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <Image
            src="/logo.avif"
            alt="Unotek logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-cover"
            priority
          />
          <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase">
            UNOTEK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = isActivePath(link.path);
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-bold tracking-wide uppercase transition-colors relative group ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp CTA (Desktop) */}
        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20inquiring%20from%20your%20website.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-colors shadow-lg shadow-slate-900/10"
          >
            <MessageCircle size={16} />
            Direct Enquiry
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden flex flex-col px-6 py-6 gap-3"
          >
            {navLinks.map((link) => {
              const isActive = isActivePath(link.path);
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl border border-slate-100 px-4 py-3 text-base font-bold tracking-wide uppercase ${
                    isActive ? "text-blue-600" : "text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20inquiring%20from%20your%20website.`}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl"
            >
              <MessageCircle size={20} />
              WhatsApp Us Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
