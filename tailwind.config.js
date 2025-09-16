/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue1: "#003566",
        customBlue2: "#759EB8",
        customBlue3: "#014f86",
        customBlue4: "#2c7da0",
        customBlue5: "#468faf",
        customBlue6: "#247ba0",
        customPink1: "#fb6f92",
        customPink2: "#ff8fab",
        customPink3: "#ffb3c6",
        customPink4: "#ffc2d1",
        customPink5: "#ffe5ec",
        customYellow1: "#ffbd00",
        customYellow2: "#f4d172",

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

