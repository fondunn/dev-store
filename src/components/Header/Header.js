import React from 'react'
import { Navbar } from './Header.style'

import SearchField from '../SearchField/SearchField'
import Button from '../Button/Button'

function Header() {
  return (
    <Navbar>
        <Button title={'Menu'}/>
        <Button title={'Catalog'}/>
        <SearchField />
        <Button title={'search'}/>
        <Button title={'profile'}/>
        <Button title={'cart'}/>
    </Navbar>
  )
}

export default Header