import type { Metadata } from "next";
import { BirthdaySurprise } from "./_components/birthday-surprise";

export const metadata: Metadata = {
  title: "Auguri amore mio 🎂",
  description: "Una piccola sorpresa di compleanno, con tanto amore.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false }
  }
};

export default function AuguriAmorePage() {
  return <BirthdaySurprise />;
}
