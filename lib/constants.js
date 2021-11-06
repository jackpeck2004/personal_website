const sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

const constants = {
  mediaQueries: {
    IS_XSMALL: `(min-width: ${sizes.xs}px)`,
    IS_SMALL: `(min-width: ${sizes.s}px)`,
    IS_MEDIUM: `(min-width: ${sizes.md}px)`,
    IS_LARGE: `(min-width: ${sizes.lg}px)`,
    IS_XLARGE: `(min-width: ${sizes.xl}px)`,
    IS_XXLARGE: `(min-width: ${sizes.xxl}px)`
  }
};

export default constants;
