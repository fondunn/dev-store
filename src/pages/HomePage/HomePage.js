import React from 'react'
import { Container, Content } from './HomePage.style'

import Sidebar from '../../components/Sidebar/Sidebar'
import LinksHandler from '../../components/LinksHandler/LinksHandler'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import CollectionRecommended from '../../components/CollectionRecommended/CollectionRecommended'

function HomePage() {
  return (
    <Container>
        <Sidebar component={<LinksHandler />}/>
        <Content>
            <h2>Recommended</h2>
            <CollectionPreview component={ <CollectionRecommended /> }/>
        </Content>
    </Container>
  )
}

export default HomePage