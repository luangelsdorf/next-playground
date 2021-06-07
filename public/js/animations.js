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
  slide: {
    in: [
      'slideUpIn',
      'slideDownIn',
      'slideLeftIn',
      'slideRightIn',
    ],
    lua: {
      slideUp: {
        keyframes: [
          {opacity: 0},
          {opacity: 1},
        ],
        options: {

        }
      }
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

class Animate {

}