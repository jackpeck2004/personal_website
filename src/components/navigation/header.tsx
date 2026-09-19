"use client";

import { MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { DownloadCVButton } from "@/components/common";
import { Socials } from "@/components/common/socials";
import { cn } from "@/lib/helpers";
import { scrollToSection } from "@/lib/scroll";
import { NavItem } from "@/lib/types";
import { useActiveSection } from "./use-active-section";

export const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", anchorId: "home" },
  { label: "Projects", anchorId: "projects" },
  { label: "Education", anchorId: "education" },
  { label: "Experience", anchorId: "experience" },
  { label: "Skills", anchorId: "skills" },
  { label: "Conferences", anchorId: "conferences" }
];

const SECTION_IDS = NAV_ITEMS.map(({ anchorId }) => anchorId);

export function Header() {
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape, and stop the page scrolling behind it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (e: MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    // Let the body unlock before scrolling, otherwise the scroll is swallowed.
    requestAnimationFrame(() => scrollToSection(id));
  };

  const activeLabel = NAV_ITEMS.find(({ anchorId }) => anchorId === active)?.label;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b backdrop-blur-md transition-colors",
          menuOpen ? "bg-white" : "bg-white/80",
          scrolled || menuOpen ? "border-gray-200" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="#home"
            onClick={(e) => go(e, "home")}
            className="flex min-w-0 items-baseline gap-2 font-semibold tracking-tight"
          >
            Giacomo Pasin
            {/* On mobile the current section stands in for the full link list. */}
            {active !== "home" && (
              <span key={active} className="animate-fade-in truncate text-sm font-normal text-gray-500 md:hidden">
                / {activeLabel}
              </span>
            )}
          </a>

          <nav aria-label="Sections" className="hidden items-center md:flex">
            {NAV_ITEMS.map(({ label, anchorId }) => (
              <a
                key={anchorId}
                href={`#${anchorId}`}
                onClick={(e) => go(e, anchorId)}
                aria-current={active === anchorId ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === anchorId ? "text-black" : "text-gray-500 hover:text-black"
                )}
              >
                {active === anchorId && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {label}
              </a>
            ))}
            <span className="ml-3 hidden lg:inline-flex">
              <DownloadCVButton />
            </span>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 rounded-full p-2 text-xl transition hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="menu"
              id="mobile-menu"
              aria-label="Sections"
              className="absolute inset-x-0 top-full border-b border-gray-200 bg-white md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="px-4 py-3 sm:px-6">
                {NAV_ITEMS.map(({ label, anchorId }) => (
                  <li key={anchorId}>
                    <a
                      href={`#${anchorId}`}
                      onClick={(e) => go(e, anchorId)}
                      aria-current={active === anchorId ? "location" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-2.5 text-lg transition-colors",
                        active === anchorId ? "bg-gray-100 font-semibold text-black" : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {label}
                      {active === anchorId && <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-gray-100 px-7 py-4 text-xl sm:px-9">
                <Socials />
                <DownloadCVButton />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-30 bg-black/20 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
