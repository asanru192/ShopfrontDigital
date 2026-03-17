/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2540',    /* Deep premium navy for headings and footer */
          blue: '#0066FF',    /* Electric blue for primary CTA buttons */
          light: '#F8FAFC',   /* Off-white/slate for subtle section backgrounds */
          accent: '#F97316',  /* Warm orange for small notification badges or highlights */
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
