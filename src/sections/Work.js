import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import PrimaryButton from '../components/PrimaryButton';
import styles from './Work.module.scss';
import img1 from './img/work-img-1-small.jpg';
import img2 from './img/work-img-2-small.jpg';
import img3 from './img/work-img-3-small.jpg';

function Work() {
  return (
    <section className={styles.work} id="work">
      <div className="container">
        <h2 className="heading-secondary heading-secondary--main">
          Our work<br />
          <hr className="horizontal-break" />
        </h2>
      </div>

      <div className={styles.grid}>

        <div className={styles.tile}>
          <img className={styles.img} src={img1} alt="shopping mall" />
          <Link className={styles.link} to="/maintenance">Commercial</Link>
        </div>

        <div className={styles.tile}>
          <img className={styles.img} src={img2} alt="university building" />
          <Link className={styles.link} to="/maintenance">Education</Link>
        </div>

        <div className={styles.tile}>
          <img className={styles.img} src={img3} alt="house" />
          <Link className={styles.link} to="/maintenance">Residential</Link>
        </div>

      </div>
      <div className="container">
        <AnchorLink to="#contact-form">
          <PrimaryButton>Contact us</PrimaryButton>
        </AnchorLink>
      </div>
    </section>
  )
}

export default Work;
