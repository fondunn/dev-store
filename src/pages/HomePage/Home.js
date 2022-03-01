import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './Home.style'

import Sidebar from '../../components/Sidebar/Sidebar'
import CatalogList from '../../components/CatalogList/CatalogList'

import CarouselContainer from '../../components/Carousel/Carousel'

const component = () => ( <CatalogList /> )

function Home() {
  return (
    <Container>
      <Sidebar component={ <CatalogList /> }/>
      <Content>
        <CarouselContainer />
      </Content>
    </Container>
  )
}

export default Home