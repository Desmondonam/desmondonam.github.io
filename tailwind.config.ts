import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a17',
          900: '#0a1229',
          800: '#101c3d',
          700: '#16264f',
          600: '#26355f',
          400: '#8b96b8',
        },
        accent: {
          DEFAULT: '#3b82f6',
          soft: '#38bdf8',
        },
        gold: {
          DEFAULT: '#c9a86a',
        },
        ink: {
          DEFAULT: '#eef2ff',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
