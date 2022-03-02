import React from 'react'
import { Container } from './Card.style'

import { Link } from 'react-router-dom'

function Card({ title, price, img }) {
    let link = title
    link = link.replace(/\s+/g, '-')

  return (
    <Container>
    <Link to={`/catalog/${link}`}>
    <img src={img} alt="" />
        <p>{title}</p>
        <p>{price}</p>
    </Link>
       
    </Container>
  )
}

export default Card