import React, { Component } from 'react';
import styles from './JobApplication.module.scss';
import PrimaryButton from './PrimaryButton';

export class JobApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      resume: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    const { firstName, lastName, email, phone, city, resume, message } = this.state;
    return (
      <form id="form" method="POST" className={styles.form} onSubmit={this.handleSubmit}>
        <div className={`${styles.group} ${styles.half}`}>
          <input
            type="text"
            className={styles.input}
            placeholder="First Name"
            id="firstName" name="firstName"
            value={firstName}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="firstName" className={styles.label}>First Name</label>
        </div>

        <div className={`${styles.group} ${styles.half}`}>
          <input
            type="text"
            className={styles.input}
            placeholder="Last Name"
            id="firstName" name="lastName"
            value={lastName}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
        </div>

        <div className={`${styles.group} ${styles.half}`}>
          <input
            type="email"
            className={styles.input}
            placeholder="E-mail"
            id="email" name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="email" className={styles.label}>E-mail</label>
        </div>

        <div className={`${styles.group} ${styles.half}`}>
          <input
            type="text"
            className={styles.input}
            placeholder="Phone"
            id="phone" name="phone"
            value={phone}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="phone" className={styles.label}>Phone</label>
        </div>

        <div className={`${styles.group} ${styles.half}`}>
          <input
            type="text"
            className={styles.input}
            placeholder="Location (city)"
            id="city" name="city"
            value={city}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="city" className={styles.label}>Location (city)</label>
        </div>

        <div className={`${styles.group} ${styles.half}`}>
          <input
            type="file"
            className={styles.input}
            placeholder="Resume or CV"
            id="resume" name="resume"
            value={resume}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="resume" className={styles.label}>Resume or CV</label>
        </div>

        <div className={`${styles.group} ${styles.full}`}>
          <textarea
            className={`${styles.input} ${styles.inputTextarea}`}
            name="message"
            id="message"
            placeholder="Leave us a message (optional)"
            value={message}
            onChange={this.handleChange}
          />
        </div>

        <div className={styles.submit}>
          <PrimaryButton type="submit">Submit Application</PrimaryButton>
        </div>

      </form>
    )
  }
}

export default JobApplication;
