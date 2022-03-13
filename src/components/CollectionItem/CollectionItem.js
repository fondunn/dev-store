import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import { Card, Price, Fill } from './CollectionItem.style'

function CollectionItem({ data, addItem }) {
  console.log('data: ', data)
  const { name, price, imgUrl, id, category } = data
  return (
    <Card>
      <Link to={`/shop/${category}/${id}`} >

        <Fill>
          <img src={imgUrl} alt={name} />
        </Fill>

        <p>{name}</p>
        <p><Price>{price} $</Price></p>

      </Link>
      <button onClick={() => addItem(data)}>Add to Cart</button>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)