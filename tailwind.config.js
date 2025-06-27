/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],  // Include TypeScript if needed
  theme: {
    extend: {
      fontFamily: {
        allura: ['Allura', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        mukta: ['Mukta', 'sans-serif'],
      },
      colors: {
        primary: "#f87731",
        offwhite:"#F9F9F9",
        dark: "#1E293B",
        light: "#F8FAFC"
      },
    },
  },
  plugins: [],
};
