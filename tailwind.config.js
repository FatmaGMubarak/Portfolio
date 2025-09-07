/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue1: "#C5D5EA",
        customBlue2: "#759EB8",
        customBlue3: "#7392B7",
        customBlue4: "#B3C5D7",
        customBlue5: "#D8E1E9",
        customBlue6: "#0083C3",
        customPink1: "#fb6f92",
        customPink2: "#ff8fab",
        customPink3: "#ffb3c6",
        customPink4: "#ffc2d1",
        customPink5: "#ffe5ec",

      },
            keyframes: {
        flipX: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        flipX: "flipX 4s linear infinite",
      },

    },
    
  },
  plugins: [],
}

