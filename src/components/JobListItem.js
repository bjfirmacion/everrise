import React from 'react';
import { Link } from 'gatsby';
import styles from './JobListItem.module.scss';

function JobListItem(props) {
  const { title, category, location, linkTo } = props;
  return (
    <tr>
      <td className={`${styles.tableItem} ${styles.tableItemTitle}`}>
        <Link to={`./jobs/${linkTo}`} className={styles.tableItemLink}>
          <h3 className="heading-tertiary heading-tertiary--main">{title}</h3>
        </Link>
        <span href="./" className={`${styles.tableItemLink} ${styles.categoryMobile}`}>{category}</span>
      </td>

      <td className={`${styles.tableItem} ${styles.categoryDesktop}`}>
        <span href="./" className={styles.tableItemLink}>{category}</span>
      </td>

      <td className={styles.tableItem}>
        <span className={styles.tableItemLink}>{location}</span>
      </td>
    </tr>
  )
}

export default JobListItem;
