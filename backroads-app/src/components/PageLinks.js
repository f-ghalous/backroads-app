import React from 'react'
import { pageLinks } from '../data'

const PageLinks = ({parentclasse, itemClasse}) => {
  return (
    <ul class={parentclasse} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} class={itemClasse}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
