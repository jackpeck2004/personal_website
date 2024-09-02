import { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/navigation/header";
import '../../styles/global.css';

export const metadata: Metadata = {
  title: "Giacomo Pasin",
  description:
    "Giacomo Pasin, software engineer, stem enthusiast, AI passionate and CSE student."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
