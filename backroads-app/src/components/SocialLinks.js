import React from 'react'
import { socialLinks } from '../data'
import SocialLink1 from './SocialLink1'


const SocialLinks = ({ parentClasse, itemClasse }) => {
  return (
    <ul className={parentClasse}>
      {socialLinks.map((link) => {
        return (
          <SocialLink1 key={link.id} {...link} itemClasse={itemClasse} />
       
        )
      })}
    </ul>
  )
}

export default SocialLinks
