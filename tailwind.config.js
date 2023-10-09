/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lal: "#FF444A",
      sada: "#FFF",
      kala: "Black",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
