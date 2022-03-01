import React from 'react'
import { Navbar } from './Header.style'
import { Link } from 'react-router-dom'

import SearchField from '../SearchField/SearchField'
import Button from '../Button/Button'

function Header() {
  return (
    <Navbar>
        <Button title={'='} />
        <span>
          <Link to="/">DEV STORE</Link>
        </span>
        <Button title={'Menu'}/>
        <Button title={'Catalog'} link={'catalog'}/>
        <SearchField />
        <Button title={'search'}/>
        <Button title={'profile'}/>
        <Button title={'cart'}/>
    </Navbar>
  )
}

export default Header