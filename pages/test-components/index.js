import React from 'react';
import Head from "next/head";
import {animations} from "../../public/js/animations";

export default function testComponents() {

  function anim(target, duration = 350, easing = 'ease') {
    target.animate(
      [
        { opacity: '0', height: '0' },
        { opacity: '1', height: target.scrollHeight + 'px' }
      ],
      {
        duration: duration,
        easing: easing,
      }
    )
  }

  function animAlt(target, duration = 350, easing = 'ease') {
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

  function handleClick() {
    let lista = document.getElementById('lista');

    if (lista.classList.contains('active')) {
      lista.style.animation = 'slideDownOut 500ms ease'
      lista.addEventListener('animationend', e => {
        if (e.animationName.includes('Out')) {
          lista.classList.remove('active')
          lista.style.animation = '';
        }
      })
    } else {
      lista.classList.add('active');
    }
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
            <ul id="lista">
              <li>aassdssd</li>
              <li>aasdsasdsd</li>
              <li>asasdd</li>
              <li>asadadasdasdad</li>
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}