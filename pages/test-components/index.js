import React, {useEffect} from 'react';
import Head from "next/head";
import {animations as a} from "../../public/js/animations";

export default function testComponents() {

  function anim(target, duration = 500, easing = 'ease') {
    target.animate(
      [
        {opacity: '0', height: '0'},
        {opacity: '1', height: target.scrollHeight + 'px'}
      ],
      {
        duration: duration,
        easing: easing,
      }
    );
  }

  function animAlt(target, duration = 500, easing = 'ease') {
    target.animate(
      [
        {opacity: '1', height: target.scrollHeight + 'px'},
        {opacity: '0', height: '0'}
      ],
      {
        duration: duration,
        easing: easing
      }
    )
  }

  /*Object.entries(animations).forEach(prop => {
    if (Array.isArray(prop[1])) {
      prop[1].forEach(animation => {
        console.log(animation);
      })
    } else {
      Object.entries(prop[1]).forEach(entry => {
        entry[1].forEach(animation => {
          console.log(animation);
        })
      })
    }
  })*/

  useEffect(() => {
    function constructAnimation(target, keyframes, options) {
      let effect = new KeyframeEffect(target, keyframes, options);
      return new Animation(effect, document.timeline);
    }

    let keyframes = a.slide.up;
    let target = document.querySelector('.spacer');
    let options = {
      duration: 500,
      fill: 'both'
    };

    let asd = constructAnimation(target, keyframes, options);

  }, [])

  function handleClick() {
    let lista = document.getElementById('lista');
    let animationKeyframes = new KeyframeEffect(
      lista,
      a.slide.up,
      {
        duration: 250,
        easing: 'ease',
        fill: 'both'
      }
    );
    let animation = new Animation(animationKeyframes, document.timeline);

    if (lista.classList.contains('visible')) {
      animation.reverse();
      animation.onfinish = () => {
        lista.classList.replace('visible', 'invisible')
      }

    } else {
      lista.classList.replace('invisible', 'visible')
      animation.play();
    }
  }

  let from, to;
  let baseKeyframes = [
    {opacity: '0'},
    {opacity: '1'}
  ];
  [from, to] = baseKeyframes;

  function slideUp() {

  }

  return (
    <>
      <Head>
        <title>Components</title>
        <link rel="stylesheet" href="/css/test-components.css"/>
      </Head>

      <div className="container mt-3 d-flex flex-column justify-content-center align-items-start">
        <div className="spacer" />
        <main>
          <div className="position-relative">

            <button id="btn" onClick={handleClick} className="btn btn-success ms-4">Click</button>
            <ul id="lista" className="invisible">
              <li><a href="#">aassdssd</a></li>
              <li><a href="#">aasdsasdsd</a></li>
              <li><a href="#">asasdd</a></li>
              <li><a href="#">asadadasdasdad</a></li>
            </ul>

            {/*<details>
              <summary>Title</summary>
              <p>Lorem ipsum dolor sit amet.</p>
            </details>*/}
          </div>
        </main>
      </div>
    </>
  )
}