module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand: {
          300: '#996DFF',
          500: '#8247e6'
        }
      },
      borderRadius: {
        md: '0.25rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}