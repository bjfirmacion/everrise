import React, { Component } from 'react';
import JobListItem from '../components/JobListItem';
import styles from './CareersJobList.module.scss';

export class CareersJobList extends Component {
  render() {
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
                <th className={styles.tableHeader}>Category</th>
                <th className={styles.tableHeader}>Location</th>
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              <JobListItem
                title="Principal Engineer"
                category="Engineering"
                location="Taguig"
                link="#"
              />

              <JobListItem
                title="Safety Officer"
                category="Operations"
                location="Floridablanca"
                linkTo="safety-officer"
              />
            </tbody>

          </table>
        </div>
      </main>
    )
  }
}

export default CareersJobList
