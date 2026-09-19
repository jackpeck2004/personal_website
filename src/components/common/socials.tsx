import Link from "next/link";
import { ReactNode } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cn } from "@/lib/helpers";

const SOCIALS: Array<{ label: string; url: string; icon: ReactNode }> = [
  { label: "GitHub", url: "https://github.com/jackpeck2004", icon: <FiGithub /> },
  { label: "LinkedIn", url: "https://linkedin.com/in/jackpasin", icon: <FiLinkedin /> },
  { label: "Email", url: "mailto:giacomo.pasin+contact@gmail.com", icon: <FiMail /> }
];

export const Socials = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-4", className)}>
    {SOCIALS.map(({ label, url, icon }) => (
      <Link
        href={url}
        key={url}
        target="_blank"
        aria-label={label}
        className="text-black transition hover:text-blue-600"
      >
        {icon}
      </Link>
    ))}
  </div>
);
