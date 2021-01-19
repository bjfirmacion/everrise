import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import TextButton from '../components/TextButton';
import styles from './error.module.scss';

function error() {
  return (
    <Layout navSticky>
      <section className={styles.error}>
        <div className={`container ${styles.error}`}>
          <div className={styles.textbox}>
            <h1 className={`heading-primary`}>
              Oops! Something went wrong.
            </h1>
            <p className={`paragraph`}>
              Kindly push the back button on your browser and try submitting again. If the error persists, please send an e-mail to build@ever-rise.com
            </p>
            <Link to="/">
              <TextButton>Return to home page &rarr;</TextButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default error;
