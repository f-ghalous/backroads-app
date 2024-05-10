import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink';

const PageLinks = ({parentclasse, itemClasse}) => {
  return (
    <ul class={parentclasse} id="nav-links">
      {pageLinks.map((link) => {

        const {id, href, text}= link;
        return (
          <PageLink key={link.id}{...link}/>
          
        )
      })}
    </ul>
  )
}

export default PageLinks
