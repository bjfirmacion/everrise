import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.scss';

function Layout(props) {
  return (
    <>
      <Navbar navSticky={props.navSticky} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
