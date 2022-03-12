import React from 'react'
import { Container, StuffContainer } from './CollectionsList.style'

import { goods } from '../../data/goods'
import CollectionItem from '../CollectionItem/CollectionItem'

import { capitalize } from 'helpers/capitalizeFirst'

function CollectionsList() {
    return (
        <div>
            {
                Object.keys(goods).map(category => {
                    return (
                        <Container key={`category ${category}`}>
                            <p key={`category ${category}`}>{capitalize(category)}</p>
                            <StuffContainer>
                                {goods[category].map(item => {
                                    return <CollectionItem key={`item ${item._id}`} data={item} category={category}/>
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