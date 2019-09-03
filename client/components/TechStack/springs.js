export const to = index => ({
  x: 0,
  y: index * -6,
  rotation: -10 + Math.random() * 25,
  scale: 1,
  delay: index * 150
});

export const from = () => ({
  x: Math.random() > 0.55 ? -500 * 1 : 500 * -1,
  y: -1500,
  rotation: 0,
  scale: 0.5
});
