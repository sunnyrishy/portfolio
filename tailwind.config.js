/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#fffaf1',
        surface: '#ffffff',
        card: '#ffffff',
        hairline: 'rgba(20,33,61,0.10)',
        hairline2: 'rgba(20,33,61,0.2)',
        ink: '#14213d',
        mid: '#4a5878',
        dim: '#7380a0',
        accent: '#1f7ae0',
        accent2: '#e0643a',
        positive: '#1f9d63',
        negative: '#d9453f',
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
