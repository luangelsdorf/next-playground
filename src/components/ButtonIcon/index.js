import React from 'react';

export default function ButtonIcon(props) {
  console.log(props)

  let space;
  if (props.children !== undefined) {
    space = 'me-2'
  } else {
    space = ''
  }

    return (
      <button onBlur={props.toggler ? props.onClick : undefined} onClick={props.onClick} className="btn btn-dark border-0 bg-transparent">
          <span className={`material-icons ${space}`}>{props.icon}</span>
          <span>{ props.children }</span>
      </button>
    )
}