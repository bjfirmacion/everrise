import React from 'react';
import { Link } from 'gatsby';
import styles from './JobListItem.module.scss';

function JobListItem(props) {
  const { title, department, location, slug } = props;
  return (
    <tr>
      <td className={`${styles.tableItem} ${styles.tableItemTitle}`}>
        <Link to={`./${slug}`} className={styles.tableItemLink}>
          <h3 className="heading-tertiary heading-tertiary--main">{title}</h3>
        </Link>
        <span href="./" className={`${styles.tableItemLink} ${styles.departmentMobile}`}>{department}</span>
      </td>

      <td className={`${styles.tableItem} ${styles.departmentDesktop}`}>
        <span href="./" className={styles.tableItemLink}>{department}</span>
      </td>

      <td className={styles.tableItem}>
        <span className={styles.tableItemLink}>{location}</span>
      </td>
    </tr>
  )
}

export default JobListItem;
