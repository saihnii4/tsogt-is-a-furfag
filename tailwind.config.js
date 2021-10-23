module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: '600px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  variants: {
    extend: {
      blur: ['hover', 'focus'],
    },
  },
  plugins: [],
};
