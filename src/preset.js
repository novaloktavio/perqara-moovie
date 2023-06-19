// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

const primary = {
  DEFAULT: '#1E232B',
  400: '#292e36',
  500: '#1E232B',
}

const grey = {
  DEFAULT: '#E5E5E5',
  500: '#E5E5E5',
  600: '#929292',
}

module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000000',
        primary,
        secondary: '#E74C3C',
        grey: grey,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose,
      },
      fontFamily: {
        display: ['Montserrat', 'Arial', 'sans-serif'],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
