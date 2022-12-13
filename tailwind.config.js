/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
],
  theme: {
    fontFamily: {
      'sans': ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
