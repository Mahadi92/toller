module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(96 165 250)",
          dark: "rgb(59 130 246)",
        },
        gray: {
          DEFAULT: "#505050",
          dark: "#212121",
        },
        font: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          DEFAULT: "#F1F5F9",
        },
      },
    },
  },
  plugins: [],
};
