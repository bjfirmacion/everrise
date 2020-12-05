import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Products.module.scss';
import img1 from './img/card-img-1.jpg';
import img2 from './img/card-img-2.jpg';
import img3 from './img/card-img-3.jpg';
import { faTools, faBuilding, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function Products() {
  return (
    <section className={styles.products} id="products">
      <div className="container">
        <h2 className="heading-secondary heading-secondary--main">
          Our products and services<br />
          <hr className="horizontal-break u-center-text" />
        </h2>
      </div>

      <div className="container">
        <ProductCard
          heading="Construction, engineering & procurement"
          subheading="Promoting a seamless end-to-end experience"
          text="We provide a fully-integrated delivery of projects including design, engineering, procurement
          and construction, delivering a seamless experience for our customers."
          image={img1}
          icon={faTools}
          link="/maintenance"
        />

        <ProductCard
          heading="Formwork solutions"
          subheading="Ensuring the safety, speed and quality of your project"
          text="We offer bleeding edge formwork solutions for a wide variety of projects to ensure safety, speed
          and quality."
          image={img2}
          icon={faBuilding}
          link="/maintenance"
        />

        <ProductCard
          heading="Construction Management Software"
          subheading="Keep up-to-date on your project on any device 24/7"
          text="Our proprietary software is designed to enable customers to keep up-to-date on their project
          status and coordinate with design and execution teams."
          image={img3}
          icon={faLaptopCode}
          link="/maintenance"
        />
      </div>
      <div className="u-container u-center-text">
        <a href="#contact-form" className="btn btn--color-primary btn--animate">Contact us</a>
      </div>
    </section>
  )
}

export default Products;
