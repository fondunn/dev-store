import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NoMatchPage from './pages/NoMatchPage/NoMatchPage'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='shop' element={ <ShopPage /> }/>
        <Route path='shop/:categoryId' element={ <CategoryPage /> } />
        <Route path='*' element={ <NoMatchPage /> } />
      </Routes>
    </div>
  )
}

export default App