import React from 'react'
import SocialLinks from './SocialLinks'
import PageLinks from './PageLinks'
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentclasse={'footer-links'} itemClasse={'footer-link'} />
      <SocialLinks parentClasse={'footer-icons'} itemClasse={'footer-icon'} />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
