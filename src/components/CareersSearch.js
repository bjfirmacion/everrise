import React, { Component } from 'react';
import PrimaryButton from './PrimaryButton';
import styles from './CareersSearch.module.scss';

export class CareersSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      jobCategory: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSearch}>
        <div className={styles.searchInputs}>
          <input name="searchTerm" type="text" className={styles.searchBox} placeholder="Search for job title or keyword" />
          <select name="jobCategory" id="" className={styles.categoryDropdown}>
            <option className={styles.categoryItem} value="">Choose a job category</option>
            <option className={styles.categoryItem} value="administration">Administration</option>
            <option className={styles.categoryItem} value="engineering">Engineering</option>
            <option className={styles.categoryItem} value="finance">Finance</option>
            <option className={styles.categoryItem} value="human-resources">Human Resources</option>
          </select>
        </div>
        <PrimaryButton type="submit">Search Careers</PrimaryButton>
      </form>
    )
  }
}

export default CareersSearch;
