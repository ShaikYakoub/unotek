"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappNumber = "919876543210"; // Replace with client's actual number

  // Handle frosted glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Advantages", path: "/advantages" },
    { name: "Technical Spec", path: "/technical" },
    { name: "Manufacturing", path: "/manufacturing" },
  ];

  // Filter out 'Home' link when on home page
  const filteredLinks = navLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200 py-4 shadow-sm"
          : "bg-white border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="relative z-50">
          <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
            UNOTEK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {filteredLinks.map((link) => {
            const isActive = pathname === link.path;
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
                {/* Animated underline for active state */}
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
            className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-sm transition-colors shadow-lg shadow-slate-900/10"
          >
            <MessageSquare size={16} />
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
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden flex flex-col px-6 py-8 gap-6"
          >
            {filteredLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-bold tracking-wide uppercase ${
                  pathname === link.path ? "text-blue-600" : "text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20inquiring%20from%20your%20website.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl mt-4"
            >
              <MessageSquare size={20} />
              WhatsApp Us Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
