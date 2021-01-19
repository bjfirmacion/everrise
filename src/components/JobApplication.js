import React, { Component } from 'react';
import styles from './JobApplication.module.scss';
import PrimaryButton from './PrimaryButton';
import {handleChange, handleAttachment, handleSubmit} from '../helpers/formHelpers';

export class JobApplication extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      message: ''
    }
    this.handleChange = handleChange.bind(this);
    this.handleAttachment = handleAttachment.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  //Initializing state on component mount to include job data
  componentDidMount() {
    this.setState({
      jobId: this.props.job.id,
      jobTitle: this.props.job.title,
      jobCategory: this.props.job.category,
      jobLocation: this.props.job.location,
      ...this.state
    })
  }

  render() {
    const { firstName, lastName, email, phone, city, message, jobId, jobTitle, jobCategory, jobLocation } = this.state;
    return (
      <form
        id="form"
        method="POST"
        className={styles.form}
        onSubmit={this.handleSubmit}
        name="job-application"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/careers/success"
        subject={`Job Application for ${jobTitle} (${jobLocation}) received from ${firstName} ${lastName}`}
      >
        <input type="hidden" name="bot-field" /> {/* required for Netlify forms */}
        <input type="hidden" name="form-name" value="job-application" /> {/* required for Netlify forms */}

        {/* add job data from props/state to the form  */}
        <input type="hidden" name="jobId" value={jobId} />
        <input type="hidden" name="jobTitle" value={jobTitle} />
        <input type="hidden" name="jobCategory" value={jobCategory} />
        <input type="hidden" name="jobLocation" value={jobLocation} />

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
            id="lastName" name="lastName"
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
            id="attacment" name="attachment"
            required
            onChange={this.handleAttachment}
          />
          <label htmlFor="attachment" className={styles.label}>Resume or CV</label>
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
