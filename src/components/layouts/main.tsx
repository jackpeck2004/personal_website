import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { useMediaQuery } from "@/lib/hooks";
import constants from "@/lib/constants";
import HamburgerNavbar from "@/components/navigation/hamburger";

const Main = ({ children, router: _router }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const isDesktop = useMediaQuery(constants.mediaQueries.IS_LARGE);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="black" />
        <title>Giacomo Pasin</title>
      </Head>
      {isDesktop ? (
        <Navbar currentTheme={isLightTheme} changeThemeFn={setIsLightTheme} />
      ) : (
        <HamburgerNavbar />
      )}
      <main className="overflow-x-hidden">
      {children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
