import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { Container, ShoppingIcon, CartItemCount } from './CartIcon.style'

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <Container onClick={toggleCartHidden}>
    <ShoppingIcon>
    🛒
    </ShoppingIcon>
    <CartItemCount>{itemCount}</CartItemCount>
      
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)