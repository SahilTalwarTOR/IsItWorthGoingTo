/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html/', './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'batman': '#111111',
        'robin': '#6d6d6d',
      },
    },
  },
  plugins: [],
}

