/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#EDBD85',
        purple:'#4655EC',
        white:'#EBEEF2',
        dark:'#B2BBC6'
      },
      fontFamily:{
        'raleway':"'Raleway'",
        'Oswald':"'Oswald'"
      }
    },
  },
  plugins: [],
}