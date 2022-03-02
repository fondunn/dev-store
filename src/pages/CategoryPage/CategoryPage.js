import React from 'react'
import { useParams } from 'react-router-dom'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'

function CategoryPage() {

    const { categoryId } = useParams()
    console.log(categoryId);

    const category = categoryId.charAt(0).toLocaleUpperCase() + categoryId.slice(1)
    return (
        <div>
            {category}
            <CollectionPreview component={ <CollectionOverview /> }/>
        </div>
    )
}

export default CategoryPage