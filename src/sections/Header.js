import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styles from './Header.module.scss';
import PrimaryButton from '../components/PrimaryButton';

const getImages = graphql`
  {
  file(relativePath: {eq: "hero-cropped.jpg"}) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

function Header() {
  const data = useStaticQuery(getImages);

  return (
    <BackgroundImage
      Tag={`header`}
      fluid={data.file.childImageSharp.fluid}
      className={styles.header}
    >
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
    </BackgroundImage>
  )
}

export default Header