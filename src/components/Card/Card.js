import React from 'react'
import { Container } from './Card.style'

function Card({title}) {
  return (
    <Container>
        <p>{title}</p>
    </Container>
  )
}

export default Card