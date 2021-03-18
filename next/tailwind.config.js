module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
        4000: '4000ms',
      },
    },
    fontFamily: {
      title: ['Quicksand'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
