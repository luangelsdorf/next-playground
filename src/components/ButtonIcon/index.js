import React from 'react';
import styles from './ButtonIcon.module.css'

export default function ButtonIcon(props) {
    return (
      <button className={`btn btn-light`}>
          <span className="material-icons me-2">{props.icon}</span>
          <span>{ props.children }</span>
      </button>
    )
}