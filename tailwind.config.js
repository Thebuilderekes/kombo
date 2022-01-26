
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["index.html" , "./src/input.css"],
  theme: {
    extend: {

      colors: {
        'body': "#0a0a0a"
    
      }

    },


  screens: {
    'xs': '320px',
    ...defaultTheme.screens,
  },

 
},
  variants: {},
  plugins: [],
}

