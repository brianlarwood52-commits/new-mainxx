/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Running to God - Sky Blue palette (from logo)
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Road gray tones
        road: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Outback earth tones (for accents - desert, camping)
        outback: {
          50: '#fef7f0',
          100: '#fceee0',
          200: '#f8d9bc',
          300: '#f3bf8e',
          400: '#ec9a5c',
          500: '#e67e3a',
          600: '#d7632e',
          700: '#b34b27',
          800: '#8f3d26',
          900: '#743523',
        },
        // Ocean teal (Great Australian Bight)
        ocean: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Campfire orange (evening devotions)
        campfire: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc170',
          400: '#ff9c37',
          500: '#ff7f11',
          600: '#f06307',
          700: '#c74808',
          800: '#9e3a0f',
          900: '#7f3110',
        },
        // Night sky (dark mode, stars)
        night: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Bush green (eucalyptus, Australian bush)
        bush: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Sand (beaches, desert)
        sand: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#f8f0db',
          300: '#f2e2bc',
          400: '#eacd94',
          500: '#e1b56e',
          600: '#d49a52',
          700: '#b17c43',
          800: '#8e633b',
          900: '#745233',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'road-line': 'roadLine 2s linear infinite',
        'star-twinkle': 'starTwinkle 3s ease-in-out infinite',
        'campfire-flicker': 'campfireFlicker 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        roadLine: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        campfireFlicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '25%': { opacity: '0.9', transform: 'scale(1.02)' },
          '50%': { opacity: '0.95', transform: 'scale(0.98)' },
          '75%': { opacity: '0.85', transform: 'scale(1.01)' },
        },
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(to bottom, #38bdf8 0%, #0ea5e9 50%, #0369a1 100%)',
        'sunset-gradient': 'linear-gradient(to bottom, #38bdf8 0%, #0ea5e9 30%, #f97316 70%, #c2410c 100%)',
        'night-gradient': 'linear-gradient(to bottom, #020617 0%, #0f172a 50%, #1e293b 100%)',
      },
    },
  },
  plugins: [],
}
