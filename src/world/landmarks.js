// Where each landmark sits in the 3000 wide world, and which panel it opens.
export const WORLD_W = 3000;
export const WORLD_H = 700;
export const GROUND = 570;

export const landmarks = [
  { id: 'about', label: 'Home', hint: 'Who I am', x: 300, top: 200 },
  { id: 'projects', label: 'Engine Works', hint: 'Things I built', x: 780, top: 270 },
  { id: 'opensource', label: 'Signal Tower', hint: 'Merged pull requests', x: 1260, top: 330 },
  { id: 'experience', label: 'The Lab', hint: 'Where I worked', x: 1720, top: 265 },
  { id: 'education', label: 'Adelphi Hall', hint: 'Degrees and honors', x: 2150, top: 370 },
  { id: 'skills', label: 'Workbench', hint: 'Tools I reach for', x: 2530, top: 160 },
  { id: 'contact', label: 'Launch Pad', hint: 'Say hello', x: 2830, top: 255 },
];
