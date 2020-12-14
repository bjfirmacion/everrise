import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../../components/Layout';
import PrimaryButton from '../../../components/PrimaryButton';
import SecondaryButton from '../../../components/SecondaryButton';
import JobApplication from '../../../components/JobApplication';
import styles from './job.module.scss';

function SafetyOfficer() {
  return (
    <Layout navSticky={true}>
      <div className={styles.job}>
        <div className="container">
          <header className={styles.header}>
            <Link to="/careers" className={styles.backBtn}>
              <SecondaryButton>&larr; All listings</SecondaryButton>
            </Link>
            <span className={styles.location}>
              <FontAwesomeIcon className={styles.locationIcon} icon={faMapMarkerAlt}></FontAwesomeIcon>
              Floridablanca, Pampanga
            </span>
            <AnchorLink to="#apply" className={styles.applyBtnDesktop}>
              <PrimaryButton>Apply</PrimaryButton>
            </AnchorLink>
          </header>
          <hr className={styles.horizontalBreak} />
          <AnchorLink to="./#apply" className={styles.applyBtnMobile}>
            <PrimaryButton>Apply</PrimaryButton>
          </AnchorLink>
          <main className={styles.mainContent}>
            <section className={styles.jobDescription}>
              <h3 className={`heading-tertiary ${styles.jobTitle}`}>
                Safety Officer
              </h3>
              <p className={styles.jobCategory}>Operations - Full-Time</p>
              <div className={styles.jobDescriptionText}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    Conducts daily safety and security inspection and identify unsafe practices, conditions, fire hazards and other abnormalities seen and correspondingly recommends corrective measures through communication/coordination and/or thru the use of work order system
                  </li>
                  <li className={styles.li}>
                    In-charge of safety, security and 7S housekeeping inspection and prepare report for immediate action.
                  </li>
                  <li className={styles.li}>
                    Monitors and prepare safety and security reports and statistics for presentation during toolbox meetings or when needed.
                  </li>
                  <li className={styles.li}>
                    Conduct pre-employment safety and security orientation to newly hired employees and contractors.
                  </li>
                  <li className={styles.li}>
                    Monitor issuance of major personal protective equipment.
                  </li>
                </ul>

                <p className={styles.boldText}>Minimum Qualifications</p>

                <ul className={styles.ul}>
                  <li className={styles.li}>
                    At least one (1) year experience as Safety Practitioner
                  </li>
                  <li className={styles.li}>
                    COSH/ BOSH Certification
                  </li>
                  <li className={styles.li}>
                    Strong analytical and planning skills;
                  </li>
                  <li className={styles.li}>
                    Good communication and presentation skills;
                  </li>
                  <li className={styles.li}>
                    Excellent problem-solving skills;
                  </li>
                </ul>
              </div>
            </section>
          </main>
          <hr className={styles.horizontalBreak} />
          <section className={styles.applicationForm} id="apply">
            <h2 className={`heading-secondary heading-secondary--main ${styles.formHeading}`}>
              Apply for this Job
            </h2>
            <JobApplication />
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default SafetyOfficer;
