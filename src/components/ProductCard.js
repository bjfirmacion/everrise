import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextButton from './TextButton';
import styles from './ProductCard.module.scss';

function ProductCard(props) {
  const { heading, subheading, text, image, icon, link } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={image} alt="construction site" className={styles.headerImg} />
        <div className={styles.headerText}>
          <FontAwesomeIcon className={styles.icon} icon={icon}></FontAwesomeIcon>
          <h3 className="heading-tertiary heading-tertiary--main">{heading}</h3>
        </div>
      </div>
      <div className={styles.body}>
        <h4 className="heading-4">{subheading}</h4>
        <p className="paragraph">{text}</p>
        <Link to={link} className="btn-text">
          <TextButton>Learn more &rarr;</TextButton>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard;
