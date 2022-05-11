export const transitions = {
  sidebar: { duration: 0.5, ease: 'linear', delayChildren: 0.1, scatterChildren: 0.15 },
  smooth: { duration: 0.3, ease: 'easeInOut', delayChildren: 0.15, scatterChildren: 0.15 },
};

export const sidebar = {
  hidden: { x: -300 },
  visible: { x: 0 },
};

export const fadeBounceDown = {
  hidden: { opacity: 0, y: -30, transition: { y: { duration: 0.5 } } },
  visible: {
    y: [-30, 0, -3, 0],
    opacity: 1,
    transition: { y: { duration: 0.5 } },
  },
};

export const fadeBounceFromLeft = {
  hidden: { opacity: 0 },
  visible: {
    x: [-300, 0, -5, 0, -3, 0],
    opacity: 1,
    transition: { x: { duration: 0.8 } },
  },
};
