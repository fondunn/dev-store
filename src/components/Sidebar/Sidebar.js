import React from 'react'
import { SidebarContainer } from './Sidebar.style'

import CatalogList from '../CatalogList/CatalogList'

function Sidebar( {component} ) {
  return (
    <SidebarContainer>
        { component }
    </SidebarContainer>
  )
}

export default Sidebar