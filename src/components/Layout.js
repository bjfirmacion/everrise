import React from 'react';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import './Layout.scss';

function Layout(props) {
  return (
    <>
      <Navbar2 darkNav={props.darkNav} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
