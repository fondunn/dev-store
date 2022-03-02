import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { selectCollectionsSections } from '../../redux/collections/collections.selectors'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

function Shop({ sections, collections }) {
    // console.log(collections);
    const { notebooks, smartphones } = collections
    console.log(notebooks);
  return (
    <div>
        {
            sections.map(({ id, ...otherSectionProps }) => {
                console.log(otherSectionProps)
                return <CollectionPreview item={ otherSectionProps }/>
            })
        }
        {
            notebooks.map(({ id, ...otherProps }) => {
                return <CollectionPreview item={ otherProps}/>
            })
        }
        {
            smartphones.map(({ id, ...otherProps }) => {
                return <CollectionPreview item={ otherProps}/>
            })
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
    collections: selectCollectionsSections
})

export default connect(mapStateToProps)(Shop)