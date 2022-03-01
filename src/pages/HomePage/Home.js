import React from 'react'
import {Link} from 'react-router-dom'

import { Container } from './Home.style'

import Sidebar from '../../components/Sidebar/Sidebar'
import ContentContainer from '../../components/ContentContainer/ContentContainer'

function Home() {
  return (
    <Container>
    {/* <Link to="/product">Product</Link> */}
    <Sidebar />
    <ContentContainer />
    </Container>
  )
}

export default Home