import React from 'react'

import { Container, Content } from './ShopPage.style'

import Sidebar from '../../components/Sidebar/Sidebar'
import Filters from '../../components/Filters/Filters'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import CollectionsList from '../../components/CollectionsList/CollectionsList'

function ShopPage() {
    return (
        <Container>
            <Sidebar component={<Filters />} />
            <Content>
                <CollectionPreview component={ <CollectionsList /> }/>
                
            </Content>

        </Container>
    )
}

export default ShopPage