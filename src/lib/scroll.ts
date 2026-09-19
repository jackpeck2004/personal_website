// Height of the sticky header, kept in sync with `h-14` in the navigation header.
export const HEADER_HEIGHT = 56;

// Smoothly scrolls so the section's heading lands just below the sticky header.
export function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const section = document.getElementById(id);
  if (!section) return;
  const target = section.querySelector("h2") ?? section;
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - 16;
  window.scrollTo({ top, behavior: "smooth" });
}
