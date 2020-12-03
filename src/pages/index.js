import React from "react";
import Layout from '../components/layout/Layout';
import Header from '../components/sections/Header';
import About from '../components/sections/About';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
    </Layout>
  )
}
