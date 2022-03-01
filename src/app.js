import React from 'react'
import Header from './components/Header/Header'

import { Routes, Link, Route } from 'react-router-dom'

import Home from './pages/HomePage/Home'
import Product from './pages/Product'
import Catalog from './pages/Catalog/Catalog'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </div>
  )
}

export default App