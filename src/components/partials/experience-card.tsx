"use client";

import Link from "next/link";
import { FC, PropsWithChildren, useRef } from "react";
import { LineDivider } from "@/components/common"
import { useInView } from "framer-motion";
import constants from "@/lib/constants";

interface IExperienceProps {
  startDate: string;
  endDate: string;
  city: string;
  role: string;
  company: string;
  companyUrl: string;
}

export const Experience: FC<PropsWithChildren<IExperienceProps>> = ({
  startDate,
  endDate,
  city,
  role,
  company,
  companyUrl,
  children
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

  return (

    <div className="py-4" ref={ref}>
      <span className="block text-gray-400 uppercase">
        {startDate} – {endDate}
      </span>
      <span className="block text-gray-400">{city}</span>
      <span className="block text-2xl" style={{
          transform: isInView ? 'translateY(0)': 'translateY(20%)',
          opacity: isInView ? '1': '0',
          transition: constants.defaultTransition
      }}>
        <h4 className="font-bold inline">{role} – </h4>
        <Link href={companyUrl} className="link" target={"_blank"}>
          {company}
        </Link>
      </span>
      <LineDivider />
      <div className="prose text-black max-w-none" style={{
          transform: isInView ? 'translateY(0)': 'translateY(-20%)',
          opacity: isInView ? '1': '0',
          transition: constants.defaultTransition
      }}>{children}</div>
    </div>
  );
};

