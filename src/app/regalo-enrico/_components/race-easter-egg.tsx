"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serif } from "./fonts";

// A little circuit hidden among the stars, with a car lapping it.
const CIRCUIT =
  "M22 62 C10 62 8 46 20 41 L46 29 C56 24 58 12 71 12 L100 12 C113 12 115 27 104 31 L89 37 C80 41 84 50 94 50 L100 50 C113 50 113 67 100 67 L30 67 C26 67 24 64 22 62 Z";

// Top-down F1-style car pointing along +x, centred on the origin.
function Car() {
  return (
    <g>
      <rect x="-6.2" y="-3.2" width="1.6" height="6.4" rx="0.4" fill="#1f1f1f" />
      <rect x="4.6" y="-3.4" width="1.3" height="6.8" rx="0.4" fill="#e11d2e" />
      <rect x="-3.8" y="-3.3" width="2.2" height="1.3" rx="0.4" fill="#111" />
      <rect x="-3.8" y="2" width="2.2" height="1.3" rx="0.4" fill="#111" />
      <rect x="2" y="-3.1" width="1.8" height="1.1" rx="0.4" fill="#111" />
      <rect x="2" y="2" width="1.8" height="1.1" rx="0.4" fill="#111" />
      <path d="M-5 -1.8 L3 -1.2 L5.4 -0.4 L5.4 0.4 L3 1.2 L-5 1.8 Z" fill="#e11d2e" />
      <rect x="-4.6" y="-0.35" width="9.6" height="0.7" fill="#fff" opacity="0.85" />
      <circle cx="-0.4" cy="0" r="0.9" fill="#fde68a" />
    </g>
  );
}

export function RaceEasterEgg() {
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    if (!zooming) return;
    const t = setTimeout(() => setZooming(false), 4200);
    return () => clearTimeout(t);
  }, [zooming]);

  return (
    <>
      <button
        type="button"
        onClick={() => setZooming(true)}
        aria-label="Una sorpresa nascosta"
        className="group absolute right-2 top-2 z-20 opacity-50 transition-opacity duration-700 [-webkit-tap-highlight-color:transparent] hover:opacity-100 sm:bottom-4 sm:right-4 sm:top-auto"
      >
        <svg viewBox="0 0 124 80" className="h-16 w-24 overflow-visible sm:h-20 sm:w-32" aria-hidden>
          <path
            d={CIRCUIT}
            fill="none"
            stroke="rgba(255,255,255,.35)"
            strokeWidth="1.1"
            strokeDasharray="0.1 4"
            strokeLinecap="round"
          />
          {/* start / finish line */}
          <rect x="60" y="64.5" width="1.4" height="5" fill="rgba(255,255,255,.5)" />
          <g>
            <circle r="4.5" fill="rgba(255,120,120,.25)" />
            <Car />
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={CIRCUIT} />
          </g>
        </svg>
      </button>

      <AnimatePresence>
        {zooming && (
          <motion.div
            key="zoom"
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* speed lines */}
            {Array.from({ length: 14 }, (_, i) => (
              <motion.span
                key={i}
                className="absolute left-0 h-px bg-gradient-to-r from-transparent via-amber-100/70 to-transparent"
                style={{ top: `${38 + ((i * 37) % 24)}%`, width: `${30 + ((i * 53) % 40)}vw` }}
                initial={{ x: "-60vw" }}
                animate={{ x: "160vw" }}
                transition={{ duration: 0.7, delay: 0.1 + (i % 5) * 0.08, ease: "easeIn" }}
              />
            ))}

            <motion.svg
              viewBox="-8 -5 16 10"
              className="absolute w-[min(60vw,420px)] drop-shadow-[0_0_24px_rgba(255,90,90,.6)]"
              initial={{ x: "-110vw" }}
              animate={{ x: ["-110vw", "0vw", "0vw", "120vw"] }}
              transition={{ duration: 2.6, times: [0, 0.3, 0.62, 1], ease: ["easeOut", "linear", "easeIn"] }}
              aria-hidden
            >
              <Car />
            </motion.svg>

            <motion.p
              className={`${serif.className} absolute top-[64%] px-6 text-center text-2xl italic text-amber-100 sm:text-3xl`}
              style={{ textShadow: "0 0 18px rgba(255,200,120,.6)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: [0, 1, 1, 0], y: 0 }}
              transition={{ duration: 3.8, times: [0, 0.15, 0.85, 1], delay: 0.5 }}
            >
              🏁 Allacciati le cinture: si va in pista! 🏁
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
