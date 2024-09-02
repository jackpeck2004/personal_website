const sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1500
};

const constants = {
  mediaQueries: {
    IS_XSMALL: `(min-width: ${sizes.xs}px)`,
    IS_SMALL: `(min-width: ${sizes.sm}px)`,
    IS_MEDIUM: `(min-width: ${sizes.md}px)`,
    IS_LARGE: `(min-width: ${sizes.lg}px)`,
    IS_XLARGE: `(min-width: ${sizes.xl}px)`,
    IS_XXLARGE: `(min-width: ${sizes.xxl}px)`
  },
  defaultTransition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
};

export default constants;
