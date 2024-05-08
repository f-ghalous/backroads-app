import React from 'react'
import { socialLinks } from '../data'


const SocialLinks = ({ parentClasse, itemClasse }) => {
  return (
    <ul className={parentClasse}>
      {socialLinks.map((link) => {
        const { href, icon, id } = link
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className={itemClasse}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
