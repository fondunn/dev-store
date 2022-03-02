import React from 'react'
import { Container, StuffContainer } from './CollectionsList.style'

import { goods } from '../../data/goods'
import CollectionItem from '../CollectionItem/CollectionItem'

function CollectionsList() {
    return (
        <div>
            {
                Object.keys(goods).map(category => {
                    return (
                        <Container key={`category ${category}`}>
                            <p key={`category ${category}`}>{category.charAt(0).toLocaleUpperCase() + category.slice(1)}</p>
                            <StuffContainer>
                                {goods[category].map(item => {
                                    return <CollectionItem key={`item ${item._id}`} data={item}/>
                                })}
                            </StuffContainer>
                            
                        </Container>

                    )
                })
            }
        </div>
    )
}

export default CollectionsList