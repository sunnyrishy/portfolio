const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...stroke} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const Download = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...stroke} {...p}>
    <path d="M12 3v12" />
    <path d="m7 11 5 5 5-5" />
    <path d="M4 20h16" />
  </svg>
);

export const Merge = (p) => (
  <svg viewBox="0 0 24 24" width="11" height="11" {...stroke} strokeWidth="2.2" {...p}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 9v6" />
    <circle cx="18" cy="12" r="3" />
    <path d="M15 12H9" />
  </svg>
);

export const Star = (p) => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" {...p}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...stroke} {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
);

export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...stroke} {...p}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
);
