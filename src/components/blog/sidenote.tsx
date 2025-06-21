import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

interface SidenoteProps {
  className?: string;
}

export const Sidenote: FC<PropsWithChildren<SidenoteProps>> = ({ children, className }) => (
  <div
    className={cn(
      "my-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 italic rounded",
      className
    )}
  >
    {children}
  </div>
);

export default Sidenote; 