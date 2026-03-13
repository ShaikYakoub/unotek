"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FloatingWhatsAppProps {
  whatsappLink: string;
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="w-7 h-7 fill-current"
    >
      <path d="M19.11 17.33c-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.14.18 1.88 2.87 4.56 4.02.64.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.62.22-1.16.15-1.27-.07-.11-.25-.18-.51-.31Z" />
      <path d="M27.29 4.68A15.85 15.85 0 0 0 16.03 0C7.19 0 0 7.18 0 16c0 2.82.74 5.58 2.13 8l-2.23 8.14 8.34-2.19A16.06 16.06 0 0 0 16.03 32C24.87 32 32 24.82 32 16c0-4.28-1.67-8.29-4.71-11.32ZM16.03 29.3c-2.41 0-4.77-.65-6.82-1.89l-.49-.29-4.95 1.3 1.32-4.82-.32-.5A13.2 13.2 0 0 1 2.74 16c0-7.33 5.97-13.3 13.29-13.3 3.55 0 6.89 1.39 9.4 3.9A13.2 13.2 0 0 1 29.32 16c0 7.33-5.96 13.3-13.29 13.3Z" />
    </svg>
  );
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
            <WhatsAppIcon />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
