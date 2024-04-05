import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'

import HomePage from '../pages/HomePage/HomePage'

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={ <Layout/> }>
        <Route index element={ <HomePage/> }/>
    </Route>
  </Routes>
  </BrowserRouter>
}

export default Router