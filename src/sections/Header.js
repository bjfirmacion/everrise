import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.scss';
import PrimaryButton from '../components/PrimaryButton';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.textbox}>
          <h1 className="heading-primary">
            <span className="heading-primary--main">Building the future today</span>
            <span className="heading-primary--sub">Technology-driven construction & engineering</span>
          </h1>
          <div className={styles.btn}>
            <Link to="/">
              <PrimaryButton>Contact Us</PrimaryButton>
            </Link>
          </div>
          </div>
        </div>
    </header>
  )
}

export default Header