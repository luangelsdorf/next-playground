export const animations = {
  expand: [
    'expandX',
    'expandY',
  ],
  collapse: [
    'collapseX',
    'collapseY',
  ],
  fade: [
    'fadeIn',
    'fadeOut',
  ],
  slideasd: {
    in: {
      up: {
        from: {},
        to: {},
      },
      down: {},
      left: {},
      right: {},
    },
    out: [
      'slideUpOut',
      'slideDownOut',
      'slideLeftOut',
      'slideRightOut',
    ]
  },
  scale: {
    in: [
      'scaleUpIn',
      'scaleDownIn',
    ],
    out: [
      "scaleUpOut",
      "scaleDownOut",
    ]
  }
}

export class Animated {
  keyframes;
  options;
  constructor(easing = 'ease', duration = 500) {
    this.options = {
      easing: easing,
      duration: duration,
    }
  }
}

class EntranceAnimation extends Animated {
  constructor(easing, duration) {
    super(easing, duration);
  }
}

class ExitAnimation extends Animated {

}
