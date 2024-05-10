import React from 'react'

const SocialLink1 = ({href, icon, itemClasse}) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener" className={itemClasse}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink1
