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
      'primary-green': {
        900 : '#053B38',
        800 : '#053B38CC',
        700 : '#053B38A5',
        600 : '#053B387F',
        500 : '#053B384C',
        400 : '#053B3829',
      },
      'primary-pink': {
        900 : '#F8C3BA',
        800 : '#F8C3BACC',
        700 : '#F8C3BAA5',
        600 : '#F8C3BA7F',
        500 : '#F8C3BA4C',
        400 : '#F8C3BA29',
      },
      'secondary-orange': {
        900 : '#FA8017',
        800 : '#FA8017CC',
        700 : '#FA8017A5',
        600 : '#FA80177F',
        500 : '#FA80174C',
        400 : '#FA801729',
      },
      'secondary-magenta': {
        900 : '#9E336B',
        800 : '#9E336BCC',
        700 : '#9E336BA5',
        600 : '#9E336B7F',
        500 : '#9E336B4C',
        400 : '#9E336B29',
      },
    },
  },
  plugins: [],
}

