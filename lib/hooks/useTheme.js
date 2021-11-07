import useMediaQuery from "./useMediaQuery";
import constants from "../constants";

const textSizes = {
  xxl: "8rem",
  xl: "4rem",
  lg: "2rem"
};

const useTheme = () => {
  const isXl = useMediaQuery(constants.mediaQueries.IS_XLARGE);

  const typography = {
    sizes: {
      title: () => {
        if (isXl) return textSizes.xxl;

        return textSizes.xl;
      }
    }
  };

  const light = {
    typography,
    colors: {
      // Text (or normal colors)
      primary: "black",
      muted: "lightgrey",

      // Backgrounds
      primaryBackground: "white",
      hoverBackground: "black"
    }
  };

  const dark = {
    typography,
    colors: {
      // Text (or normal colors)
      primary: "white",
      muted: "lightgrey",

      // Backgrounds
      primaryBackground: "black",
      hoverBackground: "white"
    }
  };

  return {
    light,
    dark
  };
};

export default useTheme;
