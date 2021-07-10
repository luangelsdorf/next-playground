import React, {useEffect} from 'react';
import styles from '/public/css/modules/intersection-observer.module.css'
import {constructAnimation, handleIntersection} from "../../public/js/modules/intersection-observer";
import {animations as keyframes} from "../../public/js/animations";

export default function Intersection() {

  let sections = [400, 600, 200, 800, 500]


  // options for the observer
  let options = {
    rootMargin: '-75px 0px -75px 0px'
  };
  let animations = [];

  useEffect(() => {
    let observer = new IntersectionObserver(handleIntersection, options);
    let targets = document.querySelectorAll('section');
    targets.forEach(target => {
      observer.observe(target);
      let ani = constructAnimation(
        target,
        keyframes.slide.right,
        {
          duration: 750,
          easing: 'ease',
          delay: 100,
          fill: 'both'
        }
      );
      animations.push(ani);
      ani.play(); ani.pause();
    });
  });

  return (
    <div className="container-fluid p-0">
      {
        sections.map(section => {
          return (
            <section id={`sec-${sections.indexOf(section) + 1}`} className={styles.section} key={section}>
              <span>
                {`This is section #${sections.indexOf(section) + 1}`}
              </span>
            </section>
          )
        })
      }
    </div>
  )
}