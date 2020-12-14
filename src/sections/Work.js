import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Image from 'gatsby-image';
import PrimaryButton from '../components/PrimaryButton';
import styles from './Work.module.scss';

const getImages = graphql`
{
  workImg1:file(relativePath: {eq: "work-img-1-small.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
    workImg2:file(relativePath: {eq: "work-img-2-small.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
    workImg3:file(relativePath: {eq: "work-img-3-small.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

function Work() {
  const data = useStaticQuery(getImages);

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
          <Image className={styles.img} fluid={data.workImg1.childImageSharp.fluid} alt="shopping mall" />
          <Link className={styles.link} to="/maintenance">Commercial</Link>
        </div>

        <div className={styles.tile}>
          <Image className={styles.img} fluid={data.workImg2.childImageSharp.fluid} alt="university building" />
          <Link className={styles.link} to="/maintenance">Education</Link>
        </div>

        <div className={styles.tile}>
          <Image className={styles.img} fluid={data.workImg3.childImageSharp.fluid} alt="residential house" />
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
