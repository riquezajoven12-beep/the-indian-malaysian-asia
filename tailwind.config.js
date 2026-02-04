/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#FF6B00',
          light: '#FF8C33',
        },
        maroon: {
          DEFAULT: '#8B1538',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D03F',
        },
        cream: '#FFF8F0',
        'warm-white': '#FFFCF7',
        'deep-green': '#1B4332',
        teal: '#0D5C63',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
