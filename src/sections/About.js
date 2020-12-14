import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import TextButton from '../components/TextButton';
import styles from './About.module.scss';

const getImages = graphql`
 {
  img1: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

function About() {
  const data = useStaticQuery(getImages);
  return (
    <section className={styles.section} id="about">
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
            <Image
              alt="construction site"
              className={styles.img}
              fluid={data.img1.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About