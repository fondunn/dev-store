import React from 'react'
import { Container } from './CardsContainer.style'
import { notebooks } from '../../data/notebooks'

import Card from '../Card/Card'

function CardsContainer() {
  return (
    <Container>
        {
            Object.keys(notebooks).map(item => {
                return Object.values(notebooks[item]).map(notebook => {
                    return <Card title={notebook.title}/>
                })
                
                
            })
        }
    </Container>
  )
}

export default CardsContainer