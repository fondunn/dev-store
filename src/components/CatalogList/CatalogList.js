import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import { Link } from 'react-router-dom'

import { catalogData } from '../../data/catalogData'

import { ListItem } from './CatalogList.style'

function CatalogList({ sections }) {
    console.log(sections);
  return (
    <div>
        <ul>
        {
            sections.map(item => {
                return <ListItem key={item.id}><Link to={`/${item.linkUrl}`}>{item.title}</Link></ListItem>
            })
        }
        </ul>
        
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(CatalogList)