import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import JobListItem from '../components/JobListItem';
import styles from './CareersJobList.module.scss';

const query = graphql`
  {
    allStrapiJob(sort: {fields: id, order: DESC}) {
      nodes {
        title
        family
        location
        slug
        strapiId
      }
    }
  }
`

function CareersJobList() {
  const data = useStaticQuery(query);
  const { allStrapiJob: { nodes: jobs } } = data;

  return (
    <main className={styles.jobList}>
      <div className="container">
        <h2 className="heading-secondary heading-secondary--main">
          Open Positions
            <hr className="horizontal-break" />
        </h2>
        <table className={styles.table}>
          <thead className={styles.tableHeaderRow}>
            <tr>
              <th className={styles.tableHeader}>Job</th>
              <th className={`${styles.tableHeader} ${styles.categoryDesktop}`}>Department</th>
              <th className={styles.tableHeader}>Location</th>
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            {jobs.map(job => (
              <JobListItem
                key={job.strapiId}
                title={job.title}
                department={job.family}
                location={job.location}
                slug={job.slug}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default CareersJobList;
