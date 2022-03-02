import React from 'react'

import { Card, Price, Fill } from './CollectionItem.style'

function CollectionItem({ data }) {
    console.log(data)
    const { name, price, imgUrl } = data
  return (
    <Card>
        <Fill>
            <img src={imgUrl} alt={name} />
        </Fill>
        
        <p>{name}</p>
        <p><Price>{price} $</Price></p>
    </Card>
  )
}

export default CollectionItem