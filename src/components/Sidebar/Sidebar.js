import React from 'react'
import { SidebarContainer } from './Sidebar.style'

function Sidebar( {component} ) {
  return (
    <SidebarContainer>
        { component }
    </SidebarContainer>
  )
}

export default Sidebar