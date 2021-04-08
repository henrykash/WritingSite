module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './Components/**/*.{js,ts,tsx,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => (
        {'background-image': "url('/public/writing-bg.jpg')"}
      ),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      
    },
  },
  // ...
}