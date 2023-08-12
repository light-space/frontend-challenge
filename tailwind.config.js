/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: {
        DEFAULT: colors.black,
        925: "#2E2E2E",
      },
      gray: {
        ...colors.gray,
        925: "#575757",
        125: "#343434",
        450: "#4F4F4F",
      },
      green: {
        125: "#AEE1BE",
      },
    },
  },
  plugins: [],
};
