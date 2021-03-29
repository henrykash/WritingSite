module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => (
        {'background-image': "url('/public/writing-bg.jpg')"}
      )
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
