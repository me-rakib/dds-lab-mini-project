module.exports = {
  mode: 'jit',
  purge: ["*.html", "./js/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        lora: "'Lora', serif",
        roboto: "'Roboto', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
