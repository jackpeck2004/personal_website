import { useState } from "react";
import Head from "next/head";
import Navbar from "../navigation/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "@emotion/react";

const lightTheme = {
  colors: {
    primary: "black",
    primaryBackground: "white",
    hoverBackground: "black"
  }
};

const darkTheme = {
  colors: {
    primary: "white",
    primaryBackground: "black",
    hoverBackground: "white"
  }
};

const Main = ({ children, router: _router }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* 
	        To set tab-bar color for safari uncomment:
	    */}
          <meta name="theme-color" content="black" />
          <title>Giacomo Pasin</title>
        </Head>
        <Navbar currentTheme={isLightTheme} changeThemeFn={setIsLightTheme} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Main;
