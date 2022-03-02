import React from 'react'
import { Container } from './Header.style'

import CustomButton from '../CustomButton/CustomButton'

function Header() {
  return (
    <Container>
        <CustomButton title={'Home'} link={'/'}/>
        <CustomButton title={'Shop'} link={'/shop'}/>
        <CustomButton title={'Login'} link={'/shop'}/>
        <CustomButton title={'Cart'} link={'/shop'}/>
    </Container>
  )
}

export default Header