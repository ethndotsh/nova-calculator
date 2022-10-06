const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono", "monospace"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      colors: {
        green: colors.green,
      },
    },
  },
  plugins: [],
};
