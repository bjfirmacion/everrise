import React, { Component } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import styles from './Contact.module.scss';
import { handleChange, handleSubmit } from '../helpers/formHelpers';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  render() {
    const { name, email, phone, message } = this.state;

    return (
      <section className={styles.contact} id="contact">
        <div className="container">
          <div className="container">
            <h2 className="heading-secondary heading-secondary--main form__header">
              We'd love to hear from you<br />
              <hr className="horizontal-break" />
            </h2>
          </div>
          <form
            method="POST"
            className={styles.form}
            onSubmit={this.handleSubmit}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="bot-field" /> {/* required for Netlify forms */}
            <input type="hidden" name="form-name" value="contact" /> {/* required for Netlify forms */}
            <div className={styles.group}>
              <input
                type="text"
                className={styles.input}
                placeholder="Full name"
                id="name" name="name"
                value={name}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="name" className={styles.label}>Full name</label>
            </div>

            <div className={styles.group}>
              <input
                type="email"
                className={styles.input}
                placeholder="E-mail address"
                id="email"
                name="email"
                value={email}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="email" className={styles.label}>E-mail address</label>
            </div>

            <div className={styles.group}>
              <input
                type="text"
                className={styles.input}
                placeholder="Phone number (optional)"
                id="phone"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
              <label htmlFor="phone" className={styles.label}>Phone number</label>
            </div>

            <div className={styles.group}>
              <textarea
                className={`${styles.input} ${styles.inputTextarea}`}
                name="message"
                id="message"
                placeholder="Leave us a message"
                value={message}
                onChange={this.handleChange}
              />
            </div>

            <div className={`${styles.group} ${styles.groupSubmit}`}>
              <PrimaryButton type="submit">Submit</PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    )
  }
}