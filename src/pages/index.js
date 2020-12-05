import React from "react";
import Layout from '../components/Layout';
import Header from '../sections/Header';
import About from '../sections/About';
import Products from '../sections/Products';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <div className={`${styles.parallax} ${styles.parallaxA}`} />
      <Products />
      <div className={`${styles.parallax} ${styles.parallaxB}`} />
    </Layout>
  )
}
