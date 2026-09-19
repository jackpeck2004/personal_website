"use client";

import { FC, useRef } from "react";
import { ICharacteristic } from "@/lib/types";
import { scrollToSection } from "@/lib/scroll";
import { useInView } from "framer-motion";
import constants from "@/lib/constants";

export const Characteristic: FC<ICharacteristic> = ({
  title,
  description,
  sectionLinkId
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div className="border-t-2 border-gray-200 pt-3" ref={ref} >
      <h3 className="text-xl font-semibold capitalize lg:text-2xl" style={{
          transform: isInView ? 'translateY(0)': 'translateY(-20%)',
          opacity: isInView ? '1': '0',
          transition: constants.defaultTransition
      }}>{title}</h3>
      <p className="mt-1 text-[15px] leading-relaxed text-gray-600" style={{
          transform: isInView ? 'translateY(0)': 'translateY(-20%)',
          opacity: isInView ? '1': '0',
          transitionDelay: '500ms',
          transition: constants.defaultTransition
      }}>{description}</p>
      {sectionLinkId && (
        <a href={`#${sectionLinkId}`} onClick={(e) => { e.preventDefault(); scrollToSection(sectionLinkId); }} className="mt-2 inline-block cursor-pointer text-sm font-medium text-blue-600 hover:underline">
          Read more
        </a>
      )}
    </div>
  );
};

