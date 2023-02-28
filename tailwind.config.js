/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cricket': "url('./images/Cricket-Ground.png')",
        'fever': "url('./images/fever.avif')",
        'crick': "url('./images/crick.jpeg')",
      }
      
    },
  },
  plugins: [],
};
