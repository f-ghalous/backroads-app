import React from 'react'
import SocialLinks from './SocialLinks'
import PageLinks from './PageLinks'
import { socialLinks } from '../data'
import SocialLink1 from './SocialLink1'
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentclasse={'footer-links'} itemClasse={'footer-link'} />
      {/* <SocialLinks parentClasse={'footer-icons'} itemClasse={'footer-icon'} /> */}
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink1 key={link.id} {...link} itemClass="footer-icon" />
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
