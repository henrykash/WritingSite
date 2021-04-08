module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './Components/**/*.{js,ts,tsx,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => (
        {'background-image': "url('/public/writing-bg.jpg')"}
      ),
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

