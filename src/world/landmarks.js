// Where each landmark sits in the 3000 wide world, and which panel it opens.
export const WORLD_W = 3000;
export const WORLD_H = 700;
export const GROUND = 570;

export const landmarks = [
  { id: 'about', label: 'Home', hint: 'A quick hello', x: 300, top: 200 },
  { id: 'projects', label: 'Projects', hint: 'Things I built', x: 780, top: 270 },
  { id: 'opensource', label: 'Open Source', hint: 'Code that got merged', x: 1260, top: 330 },
  { id: 'experience', label: 'Experience', hint: 'Where I have worked', x: 1720, top: 265 },
  { id: 'education', label: 'Education', hint: 'School and honors', x: 2150, top: 370 },
  { id: 'skills', label: 'Skills', hint: 'Tools I use', x: 2530, top: 160 },
  { id: 'contact', label: 'Contact', hint: 'Say hello', x: 2830, top: 255 },
];
