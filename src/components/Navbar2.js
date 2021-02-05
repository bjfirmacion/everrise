import React from 'react';
import { Link } from 'gatsby';
import styles from './Navbar2.module.scss';
import logo from '../images/logo-white-small.png';
import NavLinks from '../constants/navLinks';

export default function Navbar(props) {
  const [isDark, setIsDark] = React.useState(props.darkNav);

  window.addEventListener('scroll', () => {
    let dark = true;
    if (window.scrollY === 0) {
      dark = props.darkNav;
    }
    setIsDark(dark);
  });

  return (
    <nav className={`${styles.navigation} ${isDark ? styles.dark : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="EverRise logo" className={styles.logoImg} />
      </Link>
      <div className={styles.mainNav}>
        <NavLinks />
      </div>
    </nav>
  )
}