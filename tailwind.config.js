const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['"EB Garamond"', "serif"],
      'poppins': ["Poppins", "sans-serif"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cream': '#FFFAED',
      'black': '#232528',
      'blue': '#657ED4',
      'gray': '#C4CBCA'
    }, 
    extend: {},
  },
  plugins: [],
});