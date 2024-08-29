/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffffff",
          100: "#7d7d7d",
          200: "#463f3f",
          300: "#4b4f4c",
        },
      },
    },
    plugins: [],
  },
};
