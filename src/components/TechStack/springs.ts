interface StackConfig {
  [name: string]: {
    x: number;
    y: number;
    rotation: number;
    scale: number;
    delay?: number;
  };
}

export const stackConfig = (index: number): StackConfig => ({
  to: {
    x: 0,
    y: index * -10,
    rotation: -10 + Math.random() * 25,
    scale: 1,
    delay: index * 150
  },
  from: {
    x: 2000,
    y: -1500,
    rotation: 0,
    scale: 0.2
  }
});

export const trans = (rotation: number, scale: number): string =>
  `perspective(${'3000px'}) rotateX(30deg) rotateY(${rotation /
    10}deg) rotateZ(${rotation}deg) scale(${scale})`;
