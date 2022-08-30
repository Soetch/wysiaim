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
        "konroatori": "url('/konroatori.jpg')",
        "blueyjay": "url('/blueyjay.jpg')",
        "mariodidthat": "url('/mariodidthat.jpg')",
        "intervalent": "url('/intervalent.jpg')",
        "relaxingastro": "url('/relaxingastro.jpg')",
        "pea": "url('/pea.jpg')",
        "sakamata": "url('/sakamata.jpg')",
      },
      backgroundColor: {
        "celtic": "#396EC0",
        "capri": "#52BDED",
        "denim": "#265CAF",
        "adyellow": "ffbe0b",
      },
      height: {
        "20": "4rem",
        "150": "40rem",
        "175": "50rem",
        "200": "70rem",
      }
    },
  },
  plugins: [],
}
