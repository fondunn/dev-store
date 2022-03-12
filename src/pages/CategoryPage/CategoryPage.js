import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Content } from './CategoryPage.style'

import Sidebar from '../../components/Sidebar/Sidebar'
import Filters from '../../components/Filters/Filters'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'

import { capitalize } from 'helpers/capitalizeFirst'

function CategoryPage() {

  const { categoryId } = useParams()
  console.log(categoryId);

  const category = capitalize(categoryId)
  return (
    <Container>
      <Sidebar>
        <Filters />
      </Sidebar>
      <Content>
        {category}
        <CollectionPreview >
          <CollectionOverview />
        </CollectionPreview>
      </Content>

    </Container>
  )
}

export default CategoryPage