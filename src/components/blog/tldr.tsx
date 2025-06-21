import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

interface TldrProps {
  className?: string;
}

export const Tldr: FC<PropsWithChildren<TldrProps>> = ({ children, className }) => (
  <div
    className={cn(
      "my-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-900 italic rounded",
      className
    )}
  >
    <h3 className="font-bold text-lg">TL;DR</h3>
    {children}
  </div>
);

export default Tldr; 