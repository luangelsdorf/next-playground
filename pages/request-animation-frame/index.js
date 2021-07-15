import React from 'react';
import styles from '../../public/css/modules/request-animation-frame.module.css';

export default function requestAnimationFrame() {
  return (
    <article>
      <p className={styles.bgRed}>Lorem ipsum,</p>
      <div className={styles.w50}>
        <p className={styles.bgGreen}>dolor,</p>
      </div>
      <section>
        <span className={styles.bgGreen}>dolor,</span>
      </section>
      <p className={styles.bgBlue}>sit amet.</p>
    </article>
  )
}