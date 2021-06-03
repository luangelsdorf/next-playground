import React, {useEffect} from 'react';
import styles from './SideBar.module.css'
import {pages} from "../../../pages";
import Link from "next/link";
import {toggleSideBar} from "../../../public/js";

export default function SideBar() {

  useEffect(() => {
    let elements = document.querySelectorAll('aside a')
    elements.forEach(element => {
      element.addEventListener('click', toggleSideBar)
    })
  }, [])

  return (
    <aside className={styles.aside}>
      <h3>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h3>
      <ul>
        {
          pages.map(page => {
            return (
              <li key={page}>
                <Link href={`/${page}`}>
                  <a>{page}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}