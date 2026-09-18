import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

export const script = Great_Vibes({ subsets: ["latin"], weight: "400" });
export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"]
});
