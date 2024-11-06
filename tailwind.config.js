/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFDBA4",
        primary2: "#FEECC4",
        sample1: "#D1A23B",
        secondary: "#B87333",
        black: "#020202",
        gray: "#CDCDE0",
        licorice: "#1B1212",
        matteblack: "#28282B",
        dark2: "#1D1D1F",
        dark3: "#09090A"
      },
      fontFamily:{
        pthin:["Poppins-Thin", "san serif"],
        pextralight:["Poppins-ExtraLight", "sans serif"],
        plight:["Poppins-Light","sans serif"],
        pregular:["Poppins-Regular", "sans serif"],
        pmedium:["Poppins-Medium", "sans serif"],
        pblack:["Poppins-Black", "sans serif"],
        namsterdam:["NewAmsterdam-Regular", "sans serif"],
        smregular:["SongMyung-Regular", "sans serif"],
        fbold:["Fredoka-Bold", "sans serif"],
        flight:["Fredoka-Light", "sans serif"],
        fmedium:["Fredoka-Medium", "sans serif"],
        fregular:["Fredoka-Regular", "sans serif"],
        fsemibold:["Fredoka-SemiBold", "sans serif"],
        teko:["Teko-Regular", "sans serif"],
        whisper:["Whisper-Regular", "sans serif"],
        pacifico:["Pacifico-Regular", "sans serif"]
      }
    },
  },
  plugins: [],
}

