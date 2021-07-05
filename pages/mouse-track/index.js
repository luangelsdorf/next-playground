import React, {useEffect, useState} from 'react';
import styles from '/public/css/modules/mouse-track.module.css';
import Head from "next/head";

export default function mouseTrack() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [imgCenter, setImgCenter] = useState({x: 0, y: 0});
  const [imgTopCenter, setImgTopCenter] = useState({x: 0, y: 0});
  const [angle, setAngle] = useState(0);

  function getCenter(img) {
    const imgRect = img.getBoundingClientRect();
    const centerX = imgRect.x + (imgRect.width / 2);
    const centerY = imgRect.y + (imgRect.height / 2);
    return {
      x: centerX,
      y: centerY,
    }
  }

  function getTopCenter(img) {
    const imgRect = img.getBoundingClientRect();
    const centerX = imgRect.x + (imgRect.width / 2);
    return {
      x: centerX,
      y: imgRect.y,
    }
  }

  function getAngle(img) {
    let topCenter = getTopCenter(img);
    let adjacentSide = topCenter.y - mousePosition.y;
    let oppositeSide = topCenter.x - mousePosition.x;
    let hypotenuse = Math.sqrt((adjacentSide ** 2) + (oppositeSide ** 2));
    let sine = oppositeSide / hypotenuse;
    let angle = Math.asin(sine) * 180 / Math.PI;
    img.style.transform = `rotate(${angle * (-1)}deg)`
    return angle;
  }

  useEffect(() => {
    const image = document.querySelector('img');
    window.onmousemove = e => {
      setMousePosition({x: e.clientX, y: e.clientY});
    }
    window.onresize = () => {
      setImgCenter(getCenter(image));
      setImgTopCenter(getTopCenter(image));
    }
  }, []);

  useEffect(() => {
    const image = document.querySelector('img');
    setAngle(getAngle(image))
  })

  return (
    <>
      <Head>
        <title>Mouse Tracking</title>
      </Head>

      <div className={styles.div}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-12 h-100 d-flex align-items-center justify-content-center order-1">
              <img src="/img/nave.png" alt="asd"/>
            </div>
            <div className={`col-md-6 my-auto ${styles.data}`}>
              <div className="row">
                <div className="col-md-6">
                  <section className="mb-3">
                    <h3>Mouse position</h3>
                    <span>X:&nbsp;</span><strong>{`${mousePosition.x}`}</strong>
                    <span> | </span>
                    <span>Y:&nbsp;</span><strong>{`${mousePosition.y}`}</strong>
                  </section>

                  <section className="mb-3">
                    <h3>Image center</h3>
                    <span>X:&nbsp;</span><strong>{`${imgCenter.x.toFixed(0)}`}</strong>
                    <span> | </span>
                    <span>Y:&nbsp;</span><strong>{`${imgCenter.y.toFixed(0)}`}</strong>
                  </section>

                  <section className="mb-3">
                    <h3>Image top center</h3>
                    <span>X:&nbsp;</span><strong>{`${imgTopCenter.x.toFixed(0)}`}</strong>
                    <span> | </span>
                    <span>Y:&nbsp;</span><strong>{`${imgTopCenter.y.toFixed(0)}`}</strong>
                  </section>
                </div>

                <div className="col-md-6">
                  <section className="mb-3">
                    <h3>Distance</h3>
                    <span>X:&nbsp;</span><strong>{`${Math.abs((imgTopCenter.x - mousePosition.x).toFixed(0))}`}</strong>
                    <span> | </span>
                    <span>Y:&nbsp;</span><strong>{`${Math.abs((imgTopCenter.y - mousePosition.y).toFixed(0))}`}</strong>
                  </section>

                  <section className="mb-3">
                    <h3>Angle</h3>
                    <span>{angle}</span>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}