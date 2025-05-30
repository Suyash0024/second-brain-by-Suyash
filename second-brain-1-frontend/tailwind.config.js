/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: " rgba(255, 255, 255, 0.5)",
          100: "#eeeef1",
          200: "#e6e9ed",
          600: "#95989c"

        },
        purple: {
          200: "#e0e7fe",
          500: "#3e38a7",
          600: "#5046e4",
        }
      }
    },
  },
  plugins: [],
}

