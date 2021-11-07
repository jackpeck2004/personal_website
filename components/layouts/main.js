import { useState } from "react";
import Head from "next/head";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "../../lib/hooks/useMediaQuery";
import constants from "../../lib/constants";
import useTheme from "../../lib/hooks/useTheme";

const Main = ({ children, router: _router }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const theme = useTheme();

  const isDesktop = useMediaQuery(constants.mediaQueries.IS_LARGE);

  return (
    <>
      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* 
	        To set tab-bar color for safari uncomment:
	    */}
          <meta name="theme-color" content="black" />
          <title>Giacomo Pasin</title>
        </Head>
        {isDesktop && (
          <Navbar currentTheme={isLightTheme} changeThemeFn={setIsLightTheme} />
        )}
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Main;
