/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary Sky Blue (matches logo)
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
        // Road/Journey Gray
        road: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Australian Outback/Earth tones (for accents)
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
          950: '#3e1810',
        },
        // Ocean Teal (for beach sections)
        ocean: {
          50: '#effefa',
          100: '#c8fff2',
          200: '#92fee6',
          300: '#53f6d6',
          400: '#1fe4c2',
          500: '#06c8a9',
          600: '#02a18b',
          700: '#068171',
          800: '#0a665b',
          900: '#0d544c',
          950: '#003330',
        },
        // Desert Sand (for camping sections)
        sand: {
          50: '#fefdfb',
          100: '#fcf9f0',
          200: '#f8f0db',
          300: '#f2e2bc',
          400: '#eacd94',
          500: '#e1b56e',
          600: '#d49a52',
          700: '#b17c43',
          800: '#8e633b',
          900: '#745233',
          950: '#3d2919',
        },
        // Bush Green (eucalyptus)
        bush: {
          50: '#f4f9f4',
          100: '#e5f2e7',
          200: '#cce5cf',
          300: '#a3cfa9',
          400: '#72b17a',
          500: '#4f9458',
          600: '#3d7845',
          700: '#335f39',
          800: '#2c4d31',
          900: '#25402a',
          950: '#102314',
        },
        // Campfire Orange (for devotion sections)
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
          950: '#451606',
        },
        // Night Sky (dark mode)
        night: {
          50: '#f5f6f8',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b1bac9',
          400: '#8795ab',
          500: '#677891',
          600: '#536178',
          700: '#444f62',
          800: '#3b4453',
          900: '#1a1d24',
          950: '#0f1116',
        },
        // Sunset (for atmosphere)
        sunset: {
          50: '#fff5ed',
          100: '#ffe9d5',
          200: '#ffcfaa',
          300: '#ffac74',
          400: '#ff7e3b',
          500: '#fe5a14',
          600: '#ef3f0a',
          700: '#c62c0b',
          800: '#9d2511',
          900: '#7e2311',
          950: '#440e06',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'road-pulse': 'roadPulse 4s ease-in-out infinite',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
        'campfire-glow': 'campfireGlow 2s ease-in-out infinite',
        'journey-line': 'journeyLine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        roadPulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        campfireGlow: {
          '0%, 100%': { boxShadow: '0 0 20px 10px rgba(255, 127, 17, 0.3)' },
          '50%': { boxShadow: '0 0 40px 20px rgba(255, 127, 17, 0.5)' },
        },
        journeyLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(to bottom, #38bdf8 0%, #0ea5e9 50%, #0369a1 100%)',
        'road-gradient': 'linear-gradient(to bottom, #0c4a6e 0%, #0369a1 30%, #0ea5e9 60%, #38bdf8 100%)',
        'night-sky': 'linear-gradient(to bottom, #0f1116 0%, #1a1d24 30%, #3b4453 100%)',
        'sunset-road': 'linear-gradient(to bottom, #38bdf8 0%, #0ea5e9 20%, #f97316 60%, #c2410c 100%)',
        'outback-earth': 'linear-gradient(135deg, #3e1810 0%, #743523 25%, #b34b27 50%, #e67e3a 75%, #fef7f0 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
