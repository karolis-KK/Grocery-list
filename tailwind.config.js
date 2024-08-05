/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: { 
      fontFamily: { 
        dmsans: ["DM Sans"],
      }, 
        spacing:
         { 100: "110rem",
          97: "32rem",
          98: "50rem",
         } 
    },
  },
  plugins: [],
}
