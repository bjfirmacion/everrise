import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
// import CareersSearch from '../components/CareersSearch';
import styles from './CareersHeader.module.scss';

function CareersHeader() {
  const data = useStaticQuery(getImages);

  return (
    <BackgroundImage Tag="header" fluid={data.file.childImageSharp.fluid} className={styles.header}>
      <div className={styles.textbox}>
        <h1 className="heading-primary heading-primary--main">
          Join Our Team
          </h1>
      </div>
      {/* <CareersSearch /> */}
    </BackgroundImage>
  )
}

export default CareersHeader

const getImages = graphql`
{
    file(relativePath: {eq: "careers-hero-large.jpg"}) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

