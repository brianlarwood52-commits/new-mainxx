/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Outback Earth
        earth: {
          50: '#fdf5f0',
          100: '#f9e4d6',
          200: '#f2c5a8',
          300: '#e8a070',
          400: '#dc7a42',
          500: '#CC7722',
          600: '#b85c1a',
          700: '#8B2500',
          800: '#6b2014',
          900: '#4d1810',
          950: '#2d0d08',
        },
        // Dust
        dust: {
          50: '#faf8f5',
          100: '#f5f0e6',
          200: '#ebe5d9',
          300: '#D4A574',
          400: '#c4956a',
          500: '#a67c52',
          600: '#8a6642',
          700: '#6e5135',
          800: '#5a432d',
          900: '#4a3828',
          950: '#281e14',
        },
        // Spinifex
        spinifex: {
          500: '#8B8B3A',
          600: '#6a6c32',
          700: '#52532a',
        },
        // Night Sky
        night: {
          800: '#1a2836',
          900: '#0f1a24',
          950: '#080d12',
        },
        // Campfire
        campfire: {
          400: '#fb923c',
          500: '#FF6B35',
          600: '#ea580c',
        },
        // Bight Ocean
        bight: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      fontFamily: {
        cinematic: ['Bebas Neue', 'sans-serif'],
        journal: ['Covered By Your Grace', 'cursive'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      aspectRatio: {
        'cinematic': '21 / 9',
        'photo': '3 / 2',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'dust': 'dustFloat 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
