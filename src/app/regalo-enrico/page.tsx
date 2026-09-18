import type { Metadata } from "next";
import { GiftLetter } from "./_components/gift-letter";

// Hidden page: not linked anywhere and kept out of search engines.
export const metadata: Metadata = {
  title: "Per Enri ✉️",
  description: "Una lettera per te.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false }
  }
};

export default function RegaloEnricoPage() {
  return <GiftLetter />;
}
