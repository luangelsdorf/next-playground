import React, { useEffect, useState } from 'react';
import styles from '../../public/css/modules/3d-mouse-track.module.css';

export default function Track() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
    relativeX: 0,
    relativeY: 0,
  });
  const [view, setView] = useState({ width: 0, height: 0 });
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setView({ width: window.innerWidth, height: window.innerHeight });
    setCenter(getViewportCenter());

    window.onmousemove = e => {
      setMousePos(getMousePos(e));
    }
    window.onresize = () => {
      setView({ width: window.innerWidth, height: window.innerHeight });
      setCenter(getViewportCenter());
    }
  }, [])

  function getViewportCenter() {
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
  }

  function getMousePos(e) {
    const relX = (e.pageX * 100) / window.innerWidth;
    const relY = (e.pageY * 100) / window.innerHeight;
    const translateX1 = (20 * relX) / 100;
    const translateY1 = (20 * relY) / 100;
    const translateX2 = (10 * relX) / 100;
    const translateY2 = (10 * relY) / 100;
    document.getElementById('img').style.transform = `translateX(${translateX1}px) translateY(${translateY1}px)`
    document.getElementById('detalhe').style.transform = `translateX(-${translateX2}px) translateY(-${translateY2}px)`
    return {
      x: e.pageX,
      y: e.pageY,
      relativeX: relX.toFixed(0),
      relativeY: relY.toFixed(0),
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center position-relative" style={{height: '800px'}}>
        <img id="img" className="img-fluid position-absolute" src="/img/typewriter.png" alt="asd"/>
        <img id="detalhe" className="img-fluid position-absolute" src="/img/pattern.png" alt="asd"/>
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