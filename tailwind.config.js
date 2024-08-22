
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoColumns:{
        "col5":"repeat(auto-fit,350px)"
      }
    },
  },
  plugins: [],
}