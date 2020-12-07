import React from 'react';
import Layout from '../../components/Layout';
import CareersHeader from '../../sections/CareersHeader';
import CareersJobList from '../../sections/CareersJobList';
// import styles from './index.module.scss';

function Careers() {
  return (
    <Layout>
      <CareersHeader />
      <CareersJobList />
    </Layout>
  )
}

export default Careers
