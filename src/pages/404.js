import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout';
import TextButton from '../components/TextButton';
import styles from './maintenance.module.scss';

export default function Maintenance() {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <BackgroundImage Tag="section" fluid={data.file.childImageSharp.fluid} className={styles.maintenance}>
        <div className={`container`}>
          <div className={styles.textbox}>

            <h1 className={`heading-primary`}>
              <span className={`heading-primary--main`}><i className={`fas fa-tools`}></i>404 Page Not Found</span>
            </h1>
            <p className={`paragraph ${styles.text}`}>We can't find that page. Please check that you typed the address correctly or go back to the previous page.</p>
            <Link to="/">
              <TextButton>Return to home page &rarr;</TextButton>
            </Link>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

const getImages = graphql`
  {
  file(relativePath: {eq: "maintenance-medium.jpg"}) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
