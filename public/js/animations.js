export const animations = {
  expand: {
    x: [
      {width: "0"},
      {width: "auto"},
    ],
    y: [
      {height: "0"},
      {height: "auto"},
    ],
  },
  collapse: {
    x: [
      {width: "auto"},
      {width: "0"},
    ],
    y: [
      {height: "auto"},
      {height: "0"},
    ],
  },

  fade: [
    {opacity: "0"},
    {opacity: "1"},
  ],

  slide: {
    up: [
      {transform: "translateY(50px)"},
      {transform: "initial"},
    ],
    down: [
      {transform: "translateY(-50px)"},
      {transform: "initial"},
    ],
    left: [
      {transform: "translateX(50px)"},
      {transform: "initial"},
    ],
    right: [
      {transform: "translateX(-50px)"},
      {transform: "initial"},
    ],
  },

  scale: {
    up: [
      {transform: "scale(0.9)"},
      {transform: "initial"},
    ],
    down: [
      {transform: "scale(1.1)"},
      {transform: "initial"},
    ],
  }
}

const baseKeyframes = [
  {opacity: 0},
  {opacity: 1}
]

export class Animated {
  options;

  constructor(easing = 'ease', duration = 250) {
    this.options = {
      easing: easing,
      duration: duration,
    }
  }
}