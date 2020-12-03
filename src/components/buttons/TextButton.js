import React from 'react';
import styles from './TextButton.module.scss';

function TextButton(props) {
  return (
    <div className={styles.btn}>
      {props.children}
    </div>
  )
}

export default TextButton;
