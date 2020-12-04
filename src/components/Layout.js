import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.scss';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
