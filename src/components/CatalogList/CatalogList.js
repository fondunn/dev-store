import React from 'react'

import { Link } from 'react-router-dom'

import { catalogData } from '../../data/catalogData'

import { ListItem } from './CatalogList.style'

function CatalogList() {
    console.log(catalogData);
  return (
    <div>
        <ul>
        {
            catalogData.map(item => {
                return <ListItem key={item.id}><Link to={`/${item.link}`}>{item.title}</Link></ListItem>
            })
        }
        </ul>
        
    </div>
  )
}

export default CatalogList