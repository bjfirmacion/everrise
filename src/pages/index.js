import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout';
import Header from '../sections/Header';
import About from '../sections/About';
import Products from '../sections/Products';
import Work from '../sections/Work';
import Contact from '../sections/Contact';
import styles from './index.module.scss';

export default function Home() {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <Header />
      <About />
      <BackgroundImage fluid={data.parallax1.childImageSharp.fluid} className={`${styles.parallax}`} />
      <Products />
      <Work />
      <BackgroundImage fluid={data.parallax2.childImageSharp.fluid} className={`${styles.parallax}`} />
      <Contact />
    </Layout>
  )
}

const getImages = graphql`
{
  parallax1: file(relativePath: {eq: "parallax-img-medium.jpg"}) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  parallax2: file(relativePath: {eq: "parallax-img2-medium.jpg"}) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
