import React from 'react';
import Link from 'next/link'

export let pages = ['busca-cores', 'test-components', 'side-bar', 'victory', 'apex-charts', 'intersection-observer', 'mouse-track']

export default function index() {
  return (
    <div className="container">
      <h1>Home</h1>
      <ul>
        {
          pages.map(page => {
            return (
              <li key={page}>
                <Link href={`/${page}`}>
                  <a>{ page }</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}