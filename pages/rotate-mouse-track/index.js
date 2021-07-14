import React, { useEffect, useState } from 'react';
import styles from '../../public/css/modules/rotate-mouse-track.module.css';

export default function Track() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
    relativeX: 0,
    relativeY: 0,
    translateX: 0,
    translateY: 0,
  });
  const [view, setView] = useState({ width: 0, height: 0 });
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setView({ width: document.getElementById('img').clientWidth, height: document.getElementById('img').clientHeight });
    setCenter(getViewportCenter());

    document.getElementById('img').onmouseleave = e => {
      e.currentTarget.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)'
    }
    document.getElementById('img').onmousemove = e => {
      setMousePos(getMousePos(e));
    }
    document.getElementById('img').onresize = () => {
      setView({ width: document.getElementById('img').clientWidth, height: document.getElementById('img').clientHeight });
      setCenter(getViewportCenter());
    }
  }, [])

  function getViewportCenter() {
    return {
      x: document.getElementById('img').clientWidth / 2,
      y: document.getElementById('img').clientHeight / 2
    };
  }

  function getMousePos(e) {
    const relX = (e.offsetX * 100) / document.getElementById('img').clientWidth;
    const relY = (e.offsetY * 100) / document.getElementById('img').clientHeight;
    const translateX = -(((20 * relX) / 100) - 10);
    const translateY = (((20 * relY) / 100) - 10);


    function animate() {
      document.getElementById('img').style.transform = `perspective(300px) rotateX(${translateY}deg) rotateY(${translateX}deg)`;
    }
    window.requestAnimationFrame(animate);

    return {
      x: e.offsetX,
      y: e.offsetY,
      relativeX: relX.toFixed(0),
      relativeY: relY.toFixed(0),
      translateX: translateX,
      translateY: translateY,
    }
  }

  // render
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        {/*<img id="img" className={styles.image} src="https://www.nyousefali.com.br/spiderman/img/spider-man.png" alt="asd"/>*/}
        <div id="img" className={`${styles.image}`}>
          <div>
            <img className="img-fluid" src="https://www.nyousefali.com.br/spiderman/img/spider-man.png" alt="spiderman" />
          </div>
          {/*<div className={styles.axis}>aasdasdasdads</div>*/}
        </div>
      </div>

      <div className={styles.info}>
        <section>
          <h2>Mouse Position</h2>
          <p>{` X: ${mousePos.x}px `}</p>
          <p>{` Y: ${mousePos.y}px `}</p>
          <hr/>
          <p>{` X: ${mousePos.relativeX}% `}</p>
          <p>{` Y: ${mousePos.relativeY}% `}</p>
        </section>
        <section>
          <h2>Client Viewport</h2>
          <p>{` W: ${view.width}px `}</p>
          <p>{` H: ${view.height}px `}</p>
        </section>
        <section>
          <h2>Viewport center</h2>
          <p>{` X: ${center.x}px `}</p>
          <p>{` Y: ${center.y}px `}</p>
        </section>
        <section>
          <h2>Translate</h2>
          <p>{` X: ${mousePos.translateX}px `}</p>
          <p>{` Y: ${mousePos.translateY}px `}</p>
        </section>
      </div>
    </div>
  )
}