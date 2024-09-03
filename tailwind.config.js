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
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.5s forwards",
        slideOutRight: "slideOutRight 0.5s forwards",
        slideInLeft: "slideInLeft 0.5s forwards",
        slideOutLeft: "slideOutLeft 0.5s forwards",
      },
    },
    plugins: [],
  },
};
