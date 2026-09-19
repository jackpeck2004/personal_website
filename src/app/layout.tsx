import { ReactNode } from "react";
import type { Metadata } from "next";
import '../../styles/global.css';

export const metadata: Metadata = {
  title: "Giacomo Pasin",
  description:
    "Giacomo Pasin, software engineer, stem enthusiast, AI passionate and MSc Computer Science student at ETH Zürich."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
