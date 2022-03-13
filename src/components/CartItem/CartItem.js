import React from 'react'
import { Container, ItemDetails } from './CartItem.style'

function CartItem({ data: { imgUrl, price, name, quantity } }) {
  return (
    <Container>
      <img src={imgUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </Container>
  )
}

export default CartItem