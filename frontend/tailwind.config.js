/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#fb923c",
        mainColorOnHover: "#fdba74",
        mainEntColor: "#475569",
        mainEntColorOnHover: "#94a3b8",
      },
      transitionDuration: {
        default: "300ms",
      },
    },
  },
  plugins: [],
}