import React from 'react'
import { Container } from './CollectionRecommended.style'

import { goods } from '../../data/goods'
import CollectionItem from '../CollectionItem/CollectionItem'

import { rand } from 'helpers/randomNumFromLength'

function CollectionRecommended() {
  return (
    <Container>
        <CollectionItem 
          key={'dsad'}
          data={goods[1]}
          category={'notebook'}
        />
        <CollectionItem 
          key={'dsad'}
          data={goods[2]}
          category={'notebook'}
        />
    </Container>
  )
}

export default CollectionRecommended

// goods.map(category => {
//   const cat = goods[category]
//   const num = rand(cat)
//   return <CollectionItem
//     key={`recommended ${cat[num]._idx}`}
//     data={cat[num]}
//     category={category}
//   />
// })