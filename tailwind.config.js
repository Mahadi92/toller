module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C90000",
          dark: "#6B0F0F",
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
