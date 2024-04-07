import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'

import HomePage from '../pages/HomePage/HomePage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={ <Layout/> }>
        <Route index element={ <HomePage/> }/>
        <Route path='catalog' element={ <CatalogPage/> } />
    </Route>
  </Routes>
  </BrowserRouter>
}

export default Router