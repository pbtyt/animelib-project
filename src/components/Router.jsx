import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'

import HomePage from '../pages/HomePage/HomePage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import AnimePage from '../pages/AnimePage/AnimePage'

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={ <Layout/> }>
        <Route index element={ <HomePage/> }/>
        <Route path='catalog' element={ <CatalogPage/> } />
        <Route path='anime' element={ <AnimePage/> } />
    </Route>
  </Routes>
  </BrowserRouter>
}

export default Router