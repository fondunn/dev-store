import React from 'react'
import { Container } from './Sidebar.style'

function Sidebar({ children }) {
  return (
    <Container>
    {children}
    </Container>
  )
}

export default Sidebar