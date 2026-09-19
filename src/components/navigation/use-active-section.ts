import { useEffect, useState } from "react";
import { HEADER_HEIGHT } from "@/lib/scroll";

// Returns the id of the section currently being read: the last one whose top has
// crossed a line a third of the way down the viewport (below the sticky header).
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = HEADER_HEIGHT + (window.innerHeight - HEADER_HEIGHT) / 3;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && (el.getBoundingClientRect().top <= line || (atBottom && id === ids[ids.length - 1]))) {
          current = id;
        }
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Sections change height when their "Show more" toggles open or close.
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver.disconnect();
    };
  }, [ids]);

  return active;
}
