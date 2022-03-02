import React from 'react'
import Header from './components/Header/Header'

import { Routes, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './pages/HomePage/Home'
import Product from './pages/Product/Product'
import Catalog from './pages/Catalog/Catalog'
import Empty from './pages/Empty/Empty'

import Shop from './pages/Shop/Shop'

const stateData = 'state data'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        {/* <Route path='shop' element={<Catalog />} /> */}
        <Route path='catalog/:detailId' element={<Product data={stateData}/>} />
        <Route path='shop' element={ <Shop /> } />
        <Route path='*' element={<Empty />} />
      </Routes>
    </div>
  )
}



export default connect()(App)