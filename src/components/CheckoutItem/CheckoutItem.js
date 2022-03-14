import React from 'react'
import { CheckoutItemContainer,CheckoutItemImageContainer, CheckoutItemDiv,RemoveButton } from './CheckoutItem.style'
function CheckoutItem({ cartItem: { name, imgUrl, price, quantity } }) {
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imgUrl} alt="item" />
      </CheckoutItemImageContainer>
      <CheckoutItemDiv>{name}</CheckoutItemDiv>
      <CheckoutItemDiv>{quantity}</CheckoutItemDiv>
      <CheckoutItemDiv>{price}</CheckoutItemDiv>
      <RemoveButton> &#10005; </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem