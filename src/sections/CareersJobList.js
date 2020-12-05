import React, { Component } from 'react';
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
              <tr>
                <td className={`${styles.tableItem} ${styles.tableItemTitle}`}>
                  <a href="#" className={styles.tableItemLink}>
                    <h3 className="heading-tertiary heading-tertiary--main">Principal Engineer</h3>
                  </a>
                </td>

                <td className={styles.tableItem}>
                  <a href="#" className={styles.tableItemLink}>Engineering</a>
                </td>

                <td className={styles.tableItem}>
                  <a href="#" className={styles.tableItemLink}>Taguig</a>
                </td>
              </tr>

              <tr>
                <td className={`${styles.tableItem} ${styles.tableItemTitle}`}>
                  <a href="#" className={`${styles.tableItemLink} heading-4`}>
                    <h3 className="heading-tertiary heading-tertiary--main">Office Manager</h3>
                  </a>
                </td>

                <td className={styles.tableItem}>
                  <a href="#" className={styles.tableItemLink}>Administration</a>
                </td>

                <td className={styles.tableItem}>
                  <a href="#" className={styles.tableItemLink}>Taguig</a>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </main>
    )
  }
}

export default CareersJobList
