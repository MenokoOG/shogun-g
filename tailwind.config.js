/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure all your JSX/TSX files are included
  ],
  theme: {
    extend: {
      // Add any custom configurations here if needed
      colors: {
        shogunGreen: "#1f7a1f",
        geishaPink: "#ff6f91",
      },
      fontFamily: {
        sawarabi: ["Sawarabi Mincho", "serif"], // Example of custom font
      },
    },
  },
  plugins: [],
};
