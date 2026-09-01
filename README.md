# Portfolio, Sunny Rishy Vardhan

Personal site for a C and C++ systems engineer. Built as a single page with a
scroll driven narrative: what I build, what I have merged into other people's
repositories, where I have worked, and what I reach for.

Live at [sunnyrishy.vercel.app](https://sunnyrishy.vercel.app)

## Stack

| Concern    | Choice                                      |
| ---------- | ------------------------------------------- |
| Build      | Vite 5                                      |
| UI         | React 18                                    |
| Styling    | Tailwind CSS 3, design tokens in the config |
| Motion     | Framer Motion for scroll reveals            |
| Hosting    | Vercel                                      |

## Design notes

The visual language borrows structure from Apple's landing pages (large display
type, generous whitespace, one primary action repeated down the page) and
surface treatment from react-bits (near black canvas, monospace for every
number, bento cards, an ambient accent wash).

Two accents sit at identical lightness and chroma in oklch and differ only in
hue, so they gradient into each other cleanly and never compete for attention.

Two motion rules worth knowing:

- **Above the fold entrances are CSS**, not JavaScript, with `animation-fill-mode: both`.
  Hero content must resolve to its visible end state even if an animation
  runtime never gets to run, for example when the page loads in a background tab.
- **Below the fold entrances are Framer Motion** `whileInView` with `once: true`,
  triggered at 20% visibility, since there the animation is an enhancement
  rather than a correctness requirement.

Everything collapses instantly to its end state under
`prefers-reduced-motion: reduce`.

## Content

All copy lives in [`src/data.js`](src/data.js) as the single source of truth.
Edit that file to update the site; no component changes required.

Merged pull request data was read from the GitHub API for
[github.com/sunnyrishy](https://github.com/sunnyrishy).

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```
