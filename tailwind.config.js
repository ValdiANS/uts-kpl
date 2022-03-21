const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js, ts,jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E3EAF5',
        secondary: '#272D2D',
        success: '#10C95E',
        danger: '#ED4949',
        warning: colors.amber['400'],
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
