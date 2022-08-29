/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "logo": "url('/wysiaim.png')",
        "zenith": "url('/zenith.png')",
      },
      backgroundColor: {
        "celtic": "#396EC0",
        "capri": "#52BDED",
        "denim": "#265CAF",
        "adyellow": "ffbe0b",
      },
      height: {
        "150": "40rem",
      }
    },
  },
  plugins: [],
}
