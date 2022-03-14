import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { DropdownContainer, EmptyMessage } from './CartDropdown.style'
import CartItem from 'components/CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'

function CartDropDown({ cartItems, dispatch }) {
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => {
    navigate('/checkout', {replace: true}), [navigate]
    dispatch(toggleCartHidden())
  })
  return (
    <DropdownContainer>
      {
        cartItems.length ?
        (cartItems.map(item => (
          <CartItem key={item.id} data={item}/>
        ))
        ): (<EmptyMessage>
            <h3>Your cart is empty</h3>
            </EmptyMessage>)
      }
      <button onClick={handleOnClick}>Go to Checkout</button>
    </DropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)