import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Price, Fill } from './CollectionItem.style'

function CollectionItem({ data }) {
  console.log('data: ', data)
  const { name, price, imgUrl, _id, category } = data
  return (
    <Card>
      <Link to={`/shop/${category}/${_id}`} >

        <Fill>
          <img src={imgUrl} alt={name} />
        </Fill>

        <p>{name}</p>
        <p><Price>{price} $</Price></p>

      </Link>
      <button >Add to Cart</button>
    </Card>


  )
}

export default CollectionItem