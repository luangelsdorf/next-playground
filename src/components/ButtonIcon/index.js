import React from 'react';
import styles from './ButtonIcon.module.css'
import {toggleSideBar} from "../../../public/js";

export default function ButtonIcon(props) {

  let space;
  if (props.children) {
    space = 'me-2'
  } else {
    space = ''
  }

    return (
      <button onClick={toggleSideBar} className={`btn btn-dark border-0 bg-transparent`}>
          <span className={`material-icons ${space}`}>{props.icon}</span>
          <span>{ props.children }</span>
      </button>
    )
}