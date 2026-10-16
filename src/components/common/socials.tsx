import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cn } from "@/lib/helpers";
import profile from "@/data/profile.json";

const icons = {
  GitHub: <FiGithub />,
  LinkedIn: <FiLinkedin />,
  Email: <FiMail />
};

export const Socials = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-4", className)}>
    {profile.socials.map(({ label, url }) => (
      <Link
        href={url}
        key={url}
        target="_blank"
        aria-label={label}
        className="text-black transition hover:text-blue-600"
      >
        {icons[label]}
      </Link>
    ))}
  </div>
);
