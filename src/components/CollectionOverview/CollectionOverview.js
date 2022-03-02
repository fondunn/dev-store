import React from 'react'
import { goods } from '../../data/goods'
import {useParams} from 'react-router-dom'

import CollectionItem from '../CollectionItem/CollectionItem'

function CollectionOverview() {
    const { categoryId } = useParams()
    console.log(goods[categoryId])
  return (
    <div>
        {
            goods[categoryId] === undefined 
            ?
            'Sorry, no stuff at this category'
            : 
            goods[categoryId].map(item => {
                return <CollectionItem data={item}/>
            })
            
            
        }
    </div>
  )
}

export default CollectionOverview