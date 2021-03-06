import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import { graphql, useStaticQuery } from 'gatsby';
import ProductCard from '../components/ProductCard';
import PrimaryButton from '../components/PrimaryButton';
import styles from './Products.module.scss';
import img1 from '../images/card-img-1.jpg';
import img2 from '../images/card-img-2.jpg';
import img3 from '../images/card-img-3.jpg';
import { faTools, faBuilding, faLaptopCode } from '@fortawesome/free-solid-svg-icons'


// const getImages = graphql`
// {
//   cardImg1:file(relativePath: {eq: "card-img-1.jpg"}) {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//     cardImg2:file(relativePath: {eq: "card-img-2.jpg"}) {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//     cardImg3:file(relativePath: {eq: "card-img-3.jpg"}) {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `

function Products() {
  // const data = useStaticQuery(getImages);

  return (
    <section className={styles.products} id="products">
      <div className="container">
        <h2 className="heading-secondary heading-secondary--main">
          Our products and services<br />
          <hr className="horizontal-break u-center-text" />
        </h2>
      </div>

      <div className={`container ${styles.cards}`}>
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
      <div className={`container ${styles.container}`}>
        <AnchorLink to="/#contact" title="Contact Form">
          <PrimaryButton>Contact Us</PrimaryButton>
        </AnchorLink>
      </div>
    </section>
  )
}

export default Products;
