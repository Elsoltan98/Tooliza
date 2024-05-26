/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        48: "14.05rem",
      },
      colors: {
        primary: "#ffb91f",
        textPrimary: "#2457aa",
        textBlack: "#111111",
      },
    },
  },
  plugins: [],
};
