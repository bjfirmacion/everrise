import React from 'react';
import { Link } from 'gatsby';
import styles from './Navbar.module.scss';
import logo from '../images/logo-white-small.png';
import NavLinks from '../constants/navLinks';

export default function Navbar(props) {
  const { darkNav, showSidebar, toggleSidebar } = props;
  const [isDark, setIsDark] = React.useState(darkNav);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      let dark = true;
      if (window.scrollY === 0) {
        dark = props.darkNav;
      }
      setIsDark(dark);
    });
  }, []);

  return (
    <nav className={`${styles.navigation} ${isDark ? styles.dark : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="EverRise logo" className={styles.logoImg} />
      </Link>
      <div className={styles.mainNav}>
        <NavLinks />
      </div>
      <div className={styles.toggleBtn} onClick={toggleSidebar}>
        <span className={`${styles.toggleIcon} ${showSidebar ? styles.closeBtn : ''}`}>&nbsp;</span>
      </div>
    </nav>
  )
}