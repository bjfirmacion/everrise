import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
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
            <AnchorLink to="/#contact" title="Contact Form">
              <PrimaryButton>Contact Us</PrimaryButton>
            </AnchorLink>
          </div>
          </div>
        </div>
    </header>
  )
}

export default Header