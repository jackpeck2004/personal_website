"use client";

import Link from "next/link";
import { FC, useRef } from "react";
import { ISoftwareProject } from "@/lib/types";
import { useInView } from "framer-motion";
import constants from "@/lib/constants";

export const SoftwareProjectCard: FC<Omit<ISoftwareProject, "slug">> = ({
  title,
  languages: langs,
  frameworks,
  description,
  github: gitHubUrl,
  live: liveUrl,
  date,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="border border-gray-200 rounded p-4 mb-8" style={{
          opacity: isInView ? '1': '0',
        transition: constants.defaultTransition
      }} ref={ref}>
        <div>
          <h4 className="font-semibold text-xl">{title}</h4>
          <h5>{date}</h5>
          <h6 className="mb-2 text-gray-600">
            Languages: {langs.length > 0 && langs}
            <br />
            {(frameworks && frameworks.length > 0) ? "Frameworks: " + frameworks : ""}
          </h6>

          <p>{description}</p>
          <div className="pt-2">
            {gitHubUrl && (
              <Link href={gitHubUrl} className="link" target="_blank">
                GitHub
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl} className="link" target="_blank">
                Live
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

