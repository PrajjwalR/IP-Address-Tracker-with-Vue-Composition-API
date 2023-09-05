/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('pattern.bmp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
