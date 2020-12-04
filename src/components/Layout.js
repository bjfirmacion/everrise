import React from 'react';
import Navbar from './Navbar';
import './Layout.scss';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
