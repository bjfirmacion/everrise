import React from 'react';
import styles from './Footer.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const iconStyles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}><a href="#about" className={styles.link}>About</a></li>
            <li className={styles.item}><a href="#products" className={styles.link}>Products & services</a></li>
            <li className={styles.item}><a href="#work" className={styles.link}>Our work</a></li>
            <li className={styles.item}><a href="/maintenance" className={styles.link}>News & insights</a></li>
            <li className={styles.item}><a href="/maintenance" className={styles.link}>Careers</a></li>
          </ul>
        </div>
        <div className={styles.socialLinks}>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.itemSocial}`}>
              <a href="https://www.facebook.com/everriseconstruction" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className={styles.facebook} iconStyle={iconStyles.largeIcon} />
              </a>
            </li>
            <li className={`${styles.item} ${styles.itemSocial}`}>
              <a href="https://www.linkedin.com/company/everrise-construction/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className={styles.linkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright &copy;2020 EverRise.
        All rights reserved.
    </p>
    </footer>
  )
};

export default Footer;
