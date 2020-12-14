import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextButton from './TextButton';
import styles from './ProductCard.module.scss';

// ***** CONVERTING TO GATSBY-IMAGE CAUSES THE H3 AND FONTAWESOME OVERLAY TO NOT APPEAR SO I CONVERTED BACK TO NORMAL <img> ELEMENT ****

function ProductCard(props) {
  const { heading, subheading, text, image, icon, link } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={image} alt={styles.heading} className={styles.headerImg} />
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
