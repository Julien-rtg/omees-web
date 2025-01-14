/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      extend: {
        fontFamily: {
          'lemon-milk': ['Lemon Milk', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
        },
      },
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'primary-pink': {
        900 : '#D9297F',
        800 : '#E15499',
        700 : '#E776AD',
        600 : '#ED98C2',
        500 : '#F3BBD6',
        400 : '#F9DDEB',
      },
      'secondary-black': {
        900 : '#11030A',
        800 : '#41353B',
        700 : '#675E62',
        600 : '#8D8689',
        500 : '#B3AEB1',
        400 : '#D9D7D8',
      },
      'secondary-pink': {
        900 : '#FCEEF5',
        800 : '#FDF1F7',
        700 : '#FDF1F7',
        600 : '#FEF7FA',
        500 : '#FEFAFC',
        400 : '#FFFDFE',
      },
      'secondary-yellow': {
        900 : '#FFD800',
        800 : '#FFE033',
        700 : '#FFE65C',
        600 : '#FFEC85',
        500 : '#FFF3AD',
        400 : '#FFF9D6',
      }
    },
  },
  plugins: [],
}

