/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: '"Montserrat", serif',
    },
    colors: {
      gray: "var(--color-gray)",
      primary: "var(--color-primary)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      "black-10": "var(--color-black-10)",
      gray: "var(--color-gray)",
      "gray-light": "var(--color-gray-light)",
      "gray-medium": "var(--color-gray-medium)",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
