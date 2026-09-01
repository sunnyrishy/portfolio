/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#08080a',
        surface: '#0e0e12',
        card: '#101015',
        hairline: 'rgba(255,255,255,0.08)',
        hairline2: 'rgba(255,255,255,0.14)',
        ink: '#f3f3f5',
        mid: '#a5a5b0',
        dim: '#71717d',
        accent: 'oklch(0.74 0.15 232)',
        accent2: 'oklch(0.74 0.15 305)',
        positive: 'oklch(0.78 0.16 150)',
        negative: 'oklch(0.68 0.17 25)',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"Cascadia Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.7, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
