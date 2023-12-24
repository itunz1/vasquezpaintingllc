/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'custom1': ['custom-1', "sans-serif"],
        'customb': ['custom-b', "sans-serif"],
        'customsb': ['custom-sb', "sans-serif"],
        'customm': ['custom-m', "sans-serif"],
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.6)',
        'green-app': '#689925',
        'greenLigth-app': '#8ec641',
        'yellow-app': '#efa70f',
        'yellowLigth-app': '#ffb61a',
      },
    },
  },
  plugins: [nextui()],
}
