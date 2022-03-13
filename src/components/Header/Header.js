import React from 'react'
import { Container } from './Header.style'
import { connect } from 'react-redux'

import CustomButton from 'components/CustomButton/CustomButton'
import CartIcon from 'components/CartIcon/CartIcon'
import CartDropDown from 'components/CartDropDown/CartDropDown'

function Header({ hidden }) {
  return (
    <Container>
        <CustomButton title={'Home'} link={'/'}/>
        <CustomButton title={'Shop'} link={'/shop'}/>
        <CustomButton title={'Login'} link={'/shop'}/>
        <CartIcon />
        { hidden ? null : <CartDropDown /> }
    </Container>
  )
}

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
})

export default connect(mapStateToProps)(Header)