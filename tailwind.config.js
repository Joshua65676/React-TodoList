/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '300px',
        mx: '350px',
        xm: '410px',
        md: '768px',
        lg: '876px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

