import React from 'react'
import { socialLinks } from '../data'
import SocialLink from './socialLink'


const SocialLinks = ({ parentClasse, itemClasse }) => {
  return (
    <ul className={parentClasse}>
      {socialLinks.map((link) => {
        const { href, icon, id } = link
        return (
          <SocialLink key={link.id} {...link} itemClasse={itemClasse}/>
          // <li key={id}>
          //   <a
          //     href={href}
          //     target="_blank"
          //     rel="noopener"
          //     className={itemClasse}
          //   >
          //     <i className={icon}></i>
          //   </a>
          // </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
