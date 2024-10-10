/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  
  ],

  theme: {
    extend: {
      // animation: {
      //   border: 'border 4s ease infinite',
      // },
      // keyframes: {
      //   border: {
      //     '0%, 100%': { backgroundPosition: '0% 50%' },
      //     '50%': { backgroundPosition: '100% 50%' },
      //   },
      // },
    },
  },
  plugins: [
    require('daisyui'),
    require("@material-tailwind/react/utils/withMT"),
  ],
  daisyui: {
    darkTheme: "light",
  },

}