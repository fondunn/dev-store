import React from 'react'

import { Container } from './Catalog.style'

import Sidebar from '../../components/Sidebar/Sidebar'
import Filters from '../../components/Filters/Filters'
import CardsContainer from '../../components/CardsContainer/CardsContainer'

function Catalog() {
  return (
    <Container>
        <Sidebar component={ <Filters /> }/>
        <CardsContainer />
    </Container>
  )
}

export default Catalog