import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import useToggleState from '../hooks/useToggleState';
import './Layout.scss';

function Layout(props) {
  const [showSidebar, toggleSidebar] = useToggleState(false);

  return (
    <>
      <Navbar darkNav={props.darkNav} toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
