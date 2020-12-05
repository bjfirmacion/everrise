import React, {Component} from 'react';
import PrimaryButton from '../components/PrimaryButton';
import styles from './CareersHeader.module.scss';

export class CareersHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      jobCategory: ''
    }
  }
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.textbox}>
          <h1 className="heading-primary heading-primary--main">
            Join Our Team
        </h1>
        </div>
        <form className={styles.search} method="POST" onSubmit={this.handleSearch}>
          <input name="searchTerm" type="text" className={styles.searchBox} placeholder="Search for job title or keyword" />
          <select name="jobCategory" id="" className={styles.categoryDropdown}>
            <option className={styles.categoryItem} value="">Choose a job category</option>
            <option className={styles.categoryItem} value="administration">Administration</option>
            <option className={styles.categoryItem} value="engineering">Engineering</option>
            <option className={styles.categoryItem} value="finance">Finance</option>
            <option className={styles.categoryItem} value="human-resources">Human Resources</option>
          </select>
          <PrimaryButton type="submit">Search Careers</PrimaryButton>
        </form>
      </header>
    )
  }
}

export default CareersHeader

