import React from 'react'
import { Container } from './Sidebar.style'

function Sidebar({ component }) {
  return (
    <Container>
        {/* Sidebar */}
        {component}
    </Container>
  )
}

export default Sidebar