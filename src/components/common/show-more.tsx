"use client";

import { ReactNode, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface IShowMoreProps {
  // Number of hidden items, shown on the button.
  count: number;
  children: ReactNode;
}

// Hides `children` behind a "Show N more" toggle that expands in place.
export function ShowMore({ count, children }: IShowMoreProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggle = () => {
    setOpen(!open);
    // After collapsing, keep the button in view instead of leaving the reader far below.
    if (open) {
      requestAnimationFrame(() => buttonRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }));
    }
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="more"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="mx-auto mt-6 flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
      >
        {open ? "Show less" : `Show ${count} more`}
        <FiChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  );
}
