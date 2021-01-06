/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 1000 
      }
    },
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `static/favicon.ico`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://ever-rise-backend.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`job`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
  ],
}
