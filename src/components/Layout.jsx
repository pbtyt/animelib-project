import React, { useContext } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

import { ModalContext } from '../providers/ModalProvider'

const Layout = () => {
  const { activeModal } = useContext(ModalContext);
  return (
    <>
      <Header />
      <Outlet />
      {activeModal}
    </>
  )
}

export default Layout