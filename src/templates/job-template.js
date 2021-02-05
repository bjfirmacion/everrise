import React from 'react';
import { Link, graphql } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import JobApplication from '../components/JobApplication';
import styles from './job-template.module.scss';

function jobTemplate(props) {
  const { data: { job } } = props;

  return (
    <Layout darkNav>
      <div className={styles.job}>
        <div className="container">
          <header className={styles.header}>
            <Link to="/careers" className={styles.backBtn}>
              <SecondaryButton>&larr; All listings</SecondaryButton>
            </Link>
            <span className={styles.location}>
              <FontAwesomeIcon className={styles.locationIcon} icon={faMapMarkerAlt}></FontAwesomeIcon>
              {job.location}
            </span>
            <AnchorLink to="./#apply" className={styles.applyBtnDesktop}>
              <PrimaryButton>Apply</PrimaryButton>
            </AnchorLink>
          </header>
          <hr className={styles.horizontalBreak} />
          <AnchorLink to="./#apply" className={styles.applyBtnMobile}>
            <PrimaryButton>Apply</PrimaryButton>
          </AnchorLink>
          <main className={styles.mainContent}>
            <div className={styles.jobHeading}>
              <h3 className={`heading-tertiary ${styles.jobTitle}`}>
                {job.title}
              </h3>
              <p className={styles.jobCategory}>{job.family} - {job.category.replace('_', '-')}</p>
            </div>
            <div className={styles.jobDescription}>
              <ReactMarkdown>{job.description}</ReactMarkdown>
            </div>
          </main>
          <hr className={styles.horizontalBreak} />
          <section className={styles.applicationForm} id="apply">
            <h2 className={`heading-secondary heading-secondary--main ${styles.formHeading}`}>
              Apply for this Job
            </h2>
            <JobApplication job={job}/>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query GetSingleJob($slug: String) {
  job: strapiJob(slug: {eq: $slug}) {
    id
    title
    family
    category
    location
    description
  }
}
`

export default jobTemplate;
