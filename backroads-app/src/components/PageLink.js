import React from 'react'

const PageLink = ({ href, text, itemClasse}) => {
  return (
    <li>
      <a href={href} class={itemClasse}>
        {text}
      </a>
    </li>
  )
}

export default PageLink
