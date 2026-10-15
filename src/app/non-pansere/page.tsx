import type { Metadata } from "next";
import { HeartSurprise } from "./_components/heart-surprise";

export const metadata: Metadata = {
  title: "Non pansere ❤️",
  description: "Una piccola sorpresa per te.",
  robots: { index: false, follow: false, nocache: true }
};

export default function PiccolaSorpresaAmorePage() {
  return <HeartSurprise />;
}
