"use client";

import Link from "next/link";
import { FC, useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { ISoftwareProject } from "@/lib/types";
import { useInView } from "framer-motion";
import constants from "@/lib/constants";

export const SoftwareProjectCard: FC<Omit<ISoftwareProject, "slug">> = ({
  title,
  languages,
  frameworks,
  description,
  github: gitHubUrl,
  live: liveUrl,
  date,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  // Frontmatter gives comma-separated strings, so flatten whatever we get into one line.
  const tech = [languages, frameworks].flat().filter(Boolean).join(", ");

  return (
    <div
      ref={ref}
      className="flex h-full flex-col rounded-xl border border-gray-200 p-5 transition-shadow hover:border-gray-300 hover:shadow-md"
      style={{
        opacity: isInView ? 1 : 0,
        transition: constants.defaultTransition
      }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <span className="shrink-0 text-xs text-gray-400">{date}</span>
      </div>
      {tech && <p className="mt-1 text-xs text-gray-500">{tech}</p>}
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-700">{description}</p>
      {(gitHubUrl || liveUrl) && (
        <div className="mt-4 flex gap-4 text-sm font-medium">
          {gitHubUrl && (
            <Link href={gitHubUrl} target="_blank" className="flex items-center gap-1 text-gray-700 hover:text-black">
              <FiGithub /> GitHub
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} target="_blank" className="flex items-center gap-1 text-blue-600 hover:underline">
              Visit <FiArrowUpRight />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
