'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If the user already visited in this session, skip the preloader entirely
    if (typeof window !== 'undefined' && sessionStorage.getItem('portfolio_visited')) {
      setIsLoading(false);
      return;
    }

    const duration = 350; // Fast and snappy intro (0.35s)
    const intervalTime = 15;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            try {
              sessionStorage.setItem('portfolio_visited', 'true');
            } catch {
              // ignore storage errors
            }
          }, 100);
          return 100;
        }
        return Math.min(100, Math.floor(prev + increment));
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070c] text-white selection:bg-blue-600"
        >
          {/* Subtle radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-[#05070c] pointer-events-none" />

          <div className="relative z-10 w-[min(85vw,380px)] text-center flex flex-col items-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-full border border-blue-500/40 bg-blue-950/30 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(37,99,235,0.25)] relative"
            >
              <span className="font-serif-heading text-3xl font-semibold tracking-wider text-blue-400">
                AW
              </span>
              <span className="absolute -inset-1 rounded-full border border-blue-400/20 animate-ping" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.6em] text-slate-300 font-medium mb-8 pl-[0.6em]"
            >
              AHMED WAEL
            </motion.div>

            {/* Progress Bar */}
            <div className="h-[2px] w-full bg-slate-800/80 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-300 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage & Caption */}
            <div className="flex items-center justify-between w-full text-xs text-slate-400 tracking-widest font-mono">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                MECHATRONICS & AI
              </span>
              <span className="text-blue-400 font-semibold">{progress}%</span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-[10.5px] uppercase tracking-[0.35em] text-slate-500 font-light"
            >
              Preparing the portfolio reveal
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
