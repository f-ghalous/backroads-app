import React from 'react'

const PageLink = ({ link, itemClasse}) => {
  return (
    <li>
      <a href={link.href} class={itemClasse}>
        {link.text}
      </a>
    </li>
  )
}

export default PageLink
