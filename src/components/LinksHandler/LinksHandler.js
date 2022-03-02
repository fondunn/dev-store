import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../../data/links'

function LinksHandler() {
    console.log(links)
  return (
    <ul>
        
        {links.map((link, idx) => {
            return <li key={idx}><Link to={link.url}>{link.title}</Link></li>
        })}
    </ul>
  )
}

export default LinksHandler