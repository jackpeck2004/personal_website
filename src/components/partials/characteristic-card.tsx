"use client";

import { FC, useRef } from "react";
import { ICharacteristic } from "@/lib/types";
import { Link } from "react-scroll";
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
    <div className="border-t-4 border-gray-200" ref={ref} >
      <h3 className="lg:text-3xl font-semibold mt-[10px]" style={{
          transform: isInView ? 'translateY(0)': 'translateY(-20%)',
          opacity: isInView ? '1': '0',
          transition: constants.defaultTransition
      }}>{title}</h3>
      <p style={{
          transform: isInView ? 'translateY(0)': 'translateY(-20%)',
          opacity: isInView ? '1': '0',
          transitionDelay: '500ms',
          transition: constants.defaultTransition
      }}>{description}</p>
      {sectionLinkId && (
        <Link to={sectionLinkId} smooth spy offset={-70} className="link">
          Read more
        </Link>
      )}
    </div>
  );
};

