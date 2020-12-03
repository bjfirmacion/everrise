import React from 'react';
import { Link } from 'gatsby';
import TextButton from '../buttons/TextButton';
import styles from './About.module.scss';
import aboutImg from './img/about.png';

function About() {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <div className={styles.about}>
          <div className={styles.textbox}>
            <h2 className={`heading-secondary heading-secondary--main`}>
              Who we are
                <hr className="horizontal-break" />
            </h2>
            <p className={`paragraph ${styles.paragraph}`}>
              EverRise is a fast-growing, tech-enabled construction company that utilizes and develops
              bleeding edge
              building technologies to overcome traditional engineering challenges. We provide seamless
              end-to-end
              engineering, procurement and construction solutions for clients who want to build the future
              today.
                </p>
            <Link to="/maintenance">
              <TextButton>About EverRise &rarr;</TextButton>
            </Link>
          </div>
          <div className={styles.imgContainer}>
            <img src={aboutImg} alt="construction site" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
