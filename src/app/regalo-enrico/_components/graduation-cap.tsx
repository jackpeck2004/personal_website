"use client";

import { motion } from "framer-motion";
import styles from "./gift.module.css";

// Mortarboard that gets tossed onto the letter, with a swaying golden tassel.
export function GraduationCap({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 72"
      className={className}
      aria-hidden
      initial={{ opacity: 0, y: -90, rotate: -40, scale: 0.6 }}
      animate={{ opacity: 1, y: 0, rotate: -8, scale: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 11, delay: 0.3 }}
    >
      {/* skull cap */}
      <path d="M26 30 L26 49 C26 58 74 58 74 49 L74 30 L50 39 Z" fill="#1c1917" />
      <path d="M26 45 C26 53 74 53 74 45" fill="none" stroke="#44403c" strokeWidth="1.2" />
      {/* board */}
      <polygon points="50,6 95,23 50,40 5,23" fill="#292524" />
      <polygon points="50,6 95,23 50,26 5,23" fill="#3f3a36" opacity="0.6" />
      {/* tassel */}
      <g className={styles.tassel}>
        <path d="M50 23 L83 29 L83 50" fill="none" stroke="#d4a64a" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M80 50 L86 50 L87.5 62 L78.5 62 Z" fill="#e3b85c" />
        <rect x="80" y="48" width="6" height="3.5" rx="1" fill="#b8892f" />
      </g>
      <circle cx="50" cy="23" r="2.6" fill="#e3b85c" />
    </motion.svg>
  );
}
