module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      base: "#F9F9F9",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "480px",
        },
      });
    },
    require("@tailwindcss/custom-forms"),
  ],
};
