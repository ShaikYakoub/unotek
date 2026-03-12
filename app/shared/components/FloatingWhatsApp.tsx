"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

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
        <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3">
          {/* Tooltip / nudge card */}
          <AnimatePresence>
            {tooltipOpen && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-enterprise-lg border border-slate-100 pt-3 p-4 max-w-[240px]"
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
            className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-xl ring-4 ring-white"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
