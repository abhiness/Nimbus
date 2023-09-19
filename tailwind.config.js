/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "xanh-mono": ["Xanh Mono", "monospace"],
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
