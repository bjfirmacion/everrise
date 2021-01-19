import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import TextButton from '../../components/TextButton';
import styles from './success.module.scss';


function success() {
  return (
    <Layout navSticky>
      <section className={styles.success}>
        <div className={`container ${styles.success}`}>
          <div className={styles.textbox}>
            <h1 className={`heading-primary`}>
              Submission Received!
            </h1>
            <p className={`paragraph`}>Thank you for your interest in a career at EverRise. We will review your job application and will contact you at the email and phone numbers provide regarding next steps.</p>
            <Link to="/careers">
              <TextButton>Return to careers page &rarr;</TextButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default success;
