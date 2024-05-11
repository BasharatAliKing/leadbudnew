/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '8rem',
        '2xl': '6rem',
      },
    },
    extend: {
    backgroundImage: {
      'bgmain': "url('/src/Utilities/mainbg.png')",
      'bgscraperfb': "url('/src/Utilities/scraperfb.png')",
    },
    colors: {
      'green': '#56F444',
      'para':'#7B7B7B',
    },
    fontFamily: {
      'poppins': ['"Poppins"'],
    },
  }
},
  plugins: [],

}

