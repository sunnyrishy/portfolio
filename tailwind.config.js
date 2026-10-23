/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#070b1f',
        surface: '#0e1430',
        card: '#101838',
        hairline: 'rgba(255,255,255,0.08)',
        hairline2: 'rgba(255,255,255,0.14)',
        ink: '#f3f3f5',
        mid: '#a5a5b0',
        dim: '#71717d',
        accent: '#4fd1ff',
        accent2: '#e0643a',
        positive: '#4ade80',
        negative: '#ff7a7a',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"Cascadia Mono"', 'monospace'],
      },
      keyframes: {
        wave: { '0%,60%,100%': { transform: 'rotate(0)' }, '10%,30%': { transform: 'rotate(16deg)' }, '20%,40%': { transform: 'rotate(-8deg)' } },
      },
      animation: { wave: 'wave 2.4s ease-in-out 1s 2' },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.7, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
