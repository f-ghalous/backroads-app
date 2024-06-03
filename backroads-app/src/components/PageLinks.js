import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink';

const PageLinks = ({parentclasse, itemClasse}) => {
  return (
    <ul class={parentclasse} id="nav-links">
      {pageLinks.map((link) => {

        const {id, href, text}= link;
        return (
          <PageLink key={id} link={link} itemClasse={itemClasse}/>
          
        )
      })}
    </ul>
  )
}

export default PageLinks
