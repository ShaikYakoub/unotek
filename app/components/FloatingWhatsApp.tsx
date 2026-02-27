"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";

interface FloatingWhatsAppProps {
  whatsappLink: string;
}

export default function FloatingWhatsApp({
  whatsappLink,
}: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show button after 3 s
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Show tooltip after 6s
  useEffect(() => {
    if (!visible || dismissed) return;
    const showTimer = setTimeout(() => setTooltipOpen(true), 6000);
    return () => clearTimeout(showTimer);
  }, [visible, dismissed]);

  // Hide tooltip after 5s of being open
  useEffect(() => {
    if (!tooltipOpen) return;
    const hideTimer = setTimeout(() => {
      setTooltipOpen(false);
      setDismissed(true);
    }, 5000);
    return () => clearTimeout(hideTimer);
  }, [tooltipOpen]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
          {/* Tooltip / nudge card */}
          <AnimatePresence>
            {tooltipOpen && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-enterprise-lg border border-slate-100 p-4 max-w-[240px]"
              >
                <div className="flex justify-between items-start gap-3 mb-1.5">
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    Talk to an engineer
                  </p>
                  <button
                    onClick={() => {
                      setTooltipOpen(false);
                      setDismissed(true);
                    }}
                    className="text-slate-400 hover:text-slate-600 flex-shrink-0 mt-0.5"
                    aria-label="Dismiss"
                  >
                    <X size={14} />
                  </button>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Get block specifications, load data, or a quotation — WhatsApp
                  in 2 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setTooltipOpen(false);
              setDismissed(true);
            }}
            className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-xl"
            aria-label="Chat on WhatsApp"
          >
            {/* WhatsApp SVG (no external dependency needed) */}
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M16 2C8.27 2 2 8.27 2 16c0 2.47.68 4.79 1.85 6.78L2 30l7.38-1.83A13.93 13.93 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2Zm7.6 19.4c-.32.9-1.87 1.72-2.57 1.8-.65.07-1.46.1-2.36-.15-.54-.15-1.24-.37-2.14-.73-3.77-1.62-6.23-5.42-6.42-5.67-.18-.25-1.5-2-.1-3.55.08-.09.17-.17.26-.24.45-.37 1.02-.58 1.35-.57.1 0 .18.01.25.01.32.01.48.03.7.53.26.62.89 2.17.97 2.33.08.16.14.35.03.56-.1.22-.16.35-.32.54-.16.19-.32.33-.5.53-.16.18-.35.38-.15.73.2.35.9 1.48 1.93 2.4 1.32 1.17 2.43 1.54 2.8 1.7.13.06.24.05.33-.03.44-.5.98-1.32 1.04-1.4.14-.22.3-.18.52-.1.22.08 1.38.65 1.62.77.24.12.4.17.46.27.06.1.06.58-.26 1.47Z" />
            </svg>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
