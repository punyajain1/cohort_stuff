/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pro:{
          100:"#ECDFCC",
          200:"#697565",
          300:"#3C3D37",
          400:"#181C14"
        }
      }
    },
    fontFamily:{
      abc:["Agu Display", "serif"]
    }
  },
  plugins: [],
}