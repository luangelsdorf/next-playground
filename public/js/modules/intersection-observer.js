export function handleIntersection(entries, obs) {
  let allAnimations = document.getAnimations();
  entries.forEach(entry => {
    allAnimations.forEach(animation => {
      if (animation.effect.target.id === entry.target.id && entry.isIntersecting && animation.playState === 'paused') {
        animation.play();
      }
    })
  })
}

function slideUp(amount = 50) {
  return [
    { opacity: '0', transform: `translateY(${amount} px)` },
    { opacity: '1', transform: 'initial' },
  ]
}

export function constructAnimation(target, keyframes, options) {
  let effect = new KeyframeEffect(target, keyframes, options);
  return new Animation(effect, document.timeline);
}