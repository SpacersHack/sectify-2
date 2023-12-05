/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        sectify: {
          DEFAULT: '#009947',
          black: '#101010',
          red: '#D70015',
          100: '#427142',
          200: '#015C28',
          300: '#2A382A',
          400: '#3B8BFF',
          500: '#F5F2F6'
        },
      },
    },

  },
  plugins: [],
}