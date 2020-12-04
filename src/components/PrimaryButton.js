import React from 'react';
import styles from './PrimaryButton.module.scss';

function PrimaryButton(props) {
  return (
    <button className={styles.btn}>
      <span>{props.children}</span>
    </button>
  )
}

export default PrimaryButton;
