import React from 'react';
import styles from './Sidebar.module.scss';
import NavLinks from '../constants/navLinks';

function Sidebar({ showSidebar, toggleSidebar }) {
  return (
    <div className={`${styles.sidebar} ${showSidebar ? styles.show : ''}`}>
      <nav className={styles.mainNav}>
        <NavLinks className={styles.navLinks} toggleSidebar={toggleSidebar} />
      </nav>
    </div>
  )
}

export default Sidebar;