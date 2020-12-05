import React from 'react';
import styles from './JobListItem.module.scss';

function JobListItem(props) {
  const {title, category, location} = props;
  return (
    <tr>
      <td className={`${styles.tableItem} ${styles.tableItemTitle}`}>
        <a href="#" className={styles.tableItemLink}>
          <h3 className="heading-tertiary heading-tertiary--main">{title}</h3>
        </a>
      </td>

      <td className={styles.tableItem}>
        <a href="#" className={styles.tableItemLink}>{category}</a>
      </td>

      <td className={styles.tableItem}>
        <a href="#" className={styles.tableItemLink}>{location}</a>
      </td>
    </tr>
  )
}

export default JobListItem;
