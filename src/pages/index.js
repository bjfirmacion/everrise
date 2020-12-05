import React from "react";
import Layout from '../components/Layout';
import Header from '../sections/Header';
import About from '../sections/About';
import Products from '../sections/Products';
import Work from '../sections/Work';
import Contact from '../sections/Contact';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <div className={`${styles.parallax} ${styles.parallaxA}`} />
      <Products />
      <Work />
      <div className={`${styles.parallax} ${styles.parallaxB}`} />
      <Contact />
    </Layout>
  )
}
