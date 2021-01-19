import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import TextButton from '../components/TextButton';
import styles from './success.module.scss';


function success() {
  return (
    <Layout navSticky>
      <section className={styles.success}>
        <div className={`container ${styles.success}`}>
          <div className={styles.textbox}>
            <h1 className={`heading-primary`}>
              Message Received!
            </h1>
            <p className={`paragraph`}>Thank you for your message. We will respond to your inquiry shortly.</p>
            <Link to="/">
              <TextButton>Return to home page &rarr;</TextButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default success;