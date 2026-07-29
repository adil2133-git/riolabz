"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animated initial screen preloader
export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Show preloader only once per browser session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("has_seen_riolabz_preloader");

    if (hasSeen) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("has_seen_riolabz_preloader", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="riolabz-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center text-white select-none overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center space-y-3">
            <motion.div
              animate={{
                y: [-22, 0, -22],
                scaleY: [0.9, 1.15, 0.9],
                scaleX: [1.1, 0.85, 1.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: [0.45, 0, 0.55, 1],
              }}
              className="w-3.5 h-3.5 rounded-full bg-[#26cb99] shadow-[0_0_15px_#26cb99] mb-1"
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-1"
            >
              <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-white leading-none">
                riolabz
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#26cb99] font-medium tracking-wide">
                Engineering Digital Futures
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
