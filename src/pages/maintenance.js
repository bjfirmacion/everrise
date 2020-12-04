import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import TextButton from '../components/TextButton';
import styles from './maintenance.module.scss';

export default function Maintenance() {
  return (
    <Layout>
      <section className={styles.maintenance}>
        <div className={`container`}>
          <div className={styles.textbox}>

            <h1 className={`heading-primary`}>
              <span className={`heading-primary--main`}><i className={`fas fa-tools`}></i> This page is under construction</span>
            </h1>
            <p className={`paragraph ${styles.text}`}>We are currently building the content for this page. Please check back at a later time.</p>
            <Link to="/">
              <TextButton>Return to home page &rarr;</TextButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
