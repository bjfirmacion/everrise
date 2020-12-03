import React from "react";
import Layout from '../components/layout/Layout';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <div className={`${styles.parallax} ${styles.parallaxA}`} />
      <About />
      <div className={`${styles.parallax} ${styles.parallaxB}`} />
    </Layout>
  )
}
