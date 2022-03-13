import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
// import ShopPage from './pages/ShopPage/ShopPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import DetailPage from './pages/DetailPage/DetailPage'
import NoMatchPage from './pages/NoMatchPage/NoMatchPage'



const ShopPage = React.lazy(() => import('./pages/ShopPage/ShopPage'))

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        {/* <Route path='shop' element={ <ShopPage /> }/> */}
        <Route 
          path='shop'
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <ShopPage />
            </React.Suspense>
          }
        />
        <Route path='shop/:categoryId' element={ <CategoryPage /> } />
        <Route path='shop/:categoryId/:detailId' element={ <DetailPage /> } />
        <Route path='*' element={ <NoMatchPage /> } />
      </Routes>
    </div>
  )
}

export default App