/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./capri.html",
    "./positano.html",
    "./rome.html",
    "./node_modules/flowbite/**/*.js",
  ],
  // https://uicolors.app/create used for color theme
  theme: {
    extend: {
      colors: {
        'cavern-pink': {
          50: '#FCF4F5',
          100: '#F8EBEC',
          200: '#F2D9DC',
          300: '#EBC5C9',
          400: '#D9939C',
          500: '#C86B79',
          600: '#B14D61',
          700: '#943C50',
          800: '#7C3547',
          900: '#6B3041',
          950: '#3B1620',
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

