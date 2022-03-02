import React from 'react'
import { connect } from 'react-redux'

function CollectionPreview({ item }) {
    console.log(item);
    const { title, price } = item
  return (
    <div>
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
  )
}


export default connect()(CollectionPreview)