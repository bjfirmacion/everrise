import React from 'react';
import CareersSearch from '../components/CareersSearch';
import styles from './CareersHeader.module.scss';

function CareersHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.textbox}>
        <h1 className="heading-primary heading-primary--main">
          Join Our Team
          </h1>
      </div>
      <CareersSearch />
    </header>
  )
}

export default CareersHeader

