import { navigate } from 'gatsby';
import React, { Component } from 'react';
import styles from './JobApplication.module.scss';
import PrimaryButton from './PrimaryButton';

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

export class JobApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: this.props.job.id,
      jobTitle: this.props.job.id,
      jobCategory: this.props.job.category,
      jobLocation: this.props.job.location,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      // attachment: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAttachment = this.handleAttachment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleAttachment(evt) {
    this.setState({ [evt.target.name]: evt.target.files[0] });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => {
        console.log(error);
        navigate('/error');
      })
  }

  render() {
    const { firstName, lastName, email, phone, city, message } = this.state;
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
      >
        <input type="hidden" name="bot-field" /> {/* required for Netlify forms */}
        <input type="hidden" name="form-name" value="job-application" /> {/* required for Netlify forms */}
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
