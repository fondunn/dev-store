import React from 'react'
import { goods } from '../../data/goods'
import {useParams} from 'react-router-dom'

import CollectionItem from '../CollectionItem/CollectionItem'

function CollectionOverview() {
    const { categoryId } = useParams()
    console.log(categoryId);
    console.log('goods category: ',goods[1])

    function getCategories(arr) {
      return arr.filter(item => {
        if (item.category === categoryId) return item
      })

    }
    const items = getCategories(goods)
    console.log('filtered items: ',items);

  return (
    <div>
        {
            items.length === 0
            ?
            'Sorry, no stuff at this category'
            : 
            items.map(item => {
              
                return <CollectionItem data={item} category={categoryId}/>
              
                
            })
            
            
        }
    </div>
  )
}

export default CollectionOverview