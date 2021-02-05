import React, { Component } from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styles from './Navbar.module.scss';
import logo from '../images/logo-white-small.png';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false
    }
  }
  
  componentDidMount() {
    if (this.props.navSticky) {
      this.setState({sticky: true});
      return;
    }
    
    window.addEventListener('scroll', () => {
      let sticky = true;
      if (window.scrollY === 0) {
        sticky = false;
      }
      this.setState({ sticky: sticky });
    });
  }

  render() {
    const {sticky} = this.state;
    return (
      <nav className={`${styles.navigation} ${sticky ? styles.sticky : ''}`}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="EverRise logo" className={styles.logoImg} />
        </Link>
        <input type="checkbox" className={styles.checkbox} id="navi-toggle" />
        <label htmlFor="navi-toggle" className={styles.button}>
          <span className={styles.icon}>&nbsp;</span>
        </label>
        <div className={styles.mainNav}>
          <ul className={styles.list}>
            <li className={styles.item}><AnchorLink to="/#about" title="About Section" className={styles.link}>About</AnchorLink></li>
            <li className={`${styles.item} ${styles.itemDropdown}`}>
              <AnchorLink to="/#products" title="Products Section" className={`${styles.link} ${styles.linkDropdown}`}>Products & services <span
                className={styles.downarr}>&#x25BC;</span></AnchorLink>
              <div className={styles.dropdown}>
                <ul className={styles.subList}>
                  <li className={styles.subItem}>
                    <Link to="/maintenance" className={styles.link}>Engineering, procurement &
                                    construction</Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link to="/maintenance" className={styles.link}>Formwork solutions</Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link to="/maintenance" className={styles.link}>Construction management software</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${styles.item} ${styles.itemDropdown}`}>
              <AnchorLink to="/#work" title="Our Work" className={`${styles.link} ${styles.linkDropdown}`}>Our work <span
                className={styles.downarr}>&#x25BC;</span></AnchorLink>
              <div className={styles.dropdown}>
                <ul className={styles.subList}>
                  <li className={styles.subItem}>
                    <Link to="#" className={styles.link}>Commercial real estate</Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link to="#" className={styles.link}>Education</Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link to="#" className={styles.link}>Residential</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.item}><Link to="/maintenance" className={styles.link}>News & insights</Link></li>
            <li className={styles.item}><Link to="/careers" className={styles.link}>Careers</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
