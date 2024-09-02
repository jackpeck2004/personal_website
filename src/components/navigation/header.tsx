"use client";

import { useMediaQuery } from "@/lib/hooks";
import { useState } from "react";
import constants from "@/lib/constants";
import HamburgerNavbar from "./hamburger";
import Navbar from "./navbar";

export function Header() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const isDesktop = useMediaQuery(constants.mediaQueries.IS_XXLARGE);

  if (isDesktop) {
    return (
      <Navbar currentTheme={isLightTheme} changeThemeFn={setIsLightTheme} />
    );
  }
  return <HamburgerNavbar />;
}
