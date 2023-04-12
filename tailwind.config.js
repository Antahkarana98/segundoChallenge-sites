/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      width: {
        '72': '4.5rem',
      },
      colors: {
        'custom-gray': '#656568',
        'purple-light': '#7430ff',
        'purple-dark': '#5227c9',
        'black': '#000000',
      },

    },
  },
  plugins: [],
}
