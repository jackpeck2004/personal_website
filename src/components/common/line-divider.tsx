"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import constants from "@/lib/constants"

export function LineDivider() {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span className="block h-[2px] bg-gray-300 my-4 rounded-full" style={{
            width: isInView ? "100%" : "0%",
          transition: constants.defaultTransition,
        }} ref={ref} />
    );
}
