module.exports = {
  purge: ['./pages/**/*/js','./components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '480px',
        },
      })
    },
  ],
}
