'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function Navbar({ whatsappLink }: { whatsappLink: string }) {
  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[101] bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <Link href="/" className="font-black text-xl tracking-tight text-blue-600">
          UNOTEK
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="#process" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Manufacturing</Link>
          <Link href="#anatomy" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Anatomy</Link>
          <Link href="#projects" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#calculator" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Calculator</Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-5 rounded-full text-sm hover:bg-blue-700 transition-colors"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
