import React from 'react';

export default function ButtonIcon(props) {
  let space = props.children ? 'me-2' : ''

    return (
      <button onClick={props.onClick} className="btn btn-dark border-0 bg-transparent">
          <span className={`material-icons ${space}`}>{props.icon}</span>
          <span>{ props.children }</span>
      </button>
    )
}