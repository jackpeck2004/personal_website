type ScrollState = {
  isLocked: boolean;
  scrollX: number;
  scrollY: number;
};

let scrollState: ScrollState | null = null;

export function toggleScroll(): void {
  if (!scrollState || !scrollState.isLocked) {
    // Disable scrolling and save current scroll position
    scrollState = {
      isLocked: true,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };

    document.body.style.overflow = "hidden";
  } else {
    // Re-enable scrolling from the saved position
    document.body.style.overflow = "";
    window.scrollTo(scrollState.scrollX, scrollState.scrollY);
    scrollState = null;
  }
}
