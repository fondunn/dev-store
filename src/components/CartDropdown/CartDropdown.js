import React from 'react'
import { connect } from 'react-redux'
import { DropdownContainer } from './CartDropdown.style'
import CartItem from 'components/CartItem/CartItem'

function CartDropDown({ cartItems }) {
  return (
    <DropdownContainer>
      {
        cartItems.map(item => 
          <CartItem key={item.id} data={item}/>
        )
      }
    </DropdownContainer>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown)