import React from 'react'
import { Container } from './CollectionRecommended.style'

import { recommended } from '../../data/recommended'
import CollectionItem from '../CollectionItem/CollectionItem'

function CollectionRecommended() {
    console.log(recommended);
  return (
    <Container>
        {
            recommended.map((item, idx) => {
                return <CollectionItem key={`recommended ${idx}`} data={item}/>
            })
        }
    </Container>
  )
}

export default CollectionRecommended