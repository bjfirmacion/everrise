import React from 'react';
import styles from './SecondaryButton.module.scss';

function PrimaryButton(props) {
  return (
    <button className={styles.btn} type={props.type}>
      <span>{props.children}</span>
    </button>
  )
}

export default PrimaryButton;
