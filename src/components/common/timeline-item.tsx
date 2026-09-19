"use client";

import Link from "next/link";
import { FC, PropsWithChildren, useRef } from "react";
import { useInView } from "framer-motion";
import constants from "@/lib/constants";

interface ITimelineItemProps {
  period: string;
  location?: string;
  title: string;
  org?: string;
  orgUrl?: string;
}

// One row of a CV-style list: dates and place on the left, role and details on the right.
export const TimelineItem: FC<PropsWithChildren<ITimelineItemProps>> = ({
  period,
  location,
  title,
  org,
  orgUrl,
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="grid gap-1 border-t border-gray-200 py-5 md:grid-cols-[11rem_1fr] md:gap-6"
      style={{
        transform: isInView ? "translateY(0)" : "translateY(12px)",
        opacity: isInView ? 1 : 0,
        transition: constants.defaultTransition
      }}
    >
      <div className="text-sm text-gray-500 md:pt-0.5">
        <div className="font-medium text-gray-600">{period}</div>
        {location && <div>{location}</div>}
      </div>
      <div>
        <h3 className="text-lg font-semibold leading-snug">
          {title}
          {org && (
            <>
              <span className="font-normal text-gray-400"> · </span>
              {orgUrl ? (
                <Link href={orgUrl} target="_blank" className="font-medium text-blue-600 hover:underline">
                  {org}
                </Link>
              ) : (
                <span className="font-medium">{org}</span>
              )}
            </>
          )}
        </h3>
        {children && (
          <div className="mt-2 text-[15px] leading-relaxed text-gray-700 [&_a]:text-blue-600 [&_a:hover]:underline [&_em]:text-gray-900 [&_li]:mt-1 [&_p+p]:mt-2 [&_p+ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
