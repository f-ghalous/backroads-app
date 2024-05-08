import React from 'react'
import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentclasse={'nav-links'} itemClasse={'nav-links'} />
        <SocialLinks parentClasse={'nav-icons'} itemClasse={'nav-icon'} />
      </div>
    </nav>
  )
}

export default Navbar
