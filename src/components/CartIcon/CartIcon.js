import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { Container, ShoppingIcon, CartItemCount } from './CartIcon.style'

function CartIcon({ toggleCartHidden }) {
  return (
    <Container onClick={toggleCartHidden}>
    <ShoppingIcon>
    🛒
    </ShoppingIcon>
    <CartItemCount>0</CartItemCount>
      
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)