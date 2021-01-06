const path = require('path');

// create pages dynamically
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data: { jobs } } = await graphql(`
    query GetJobs {
    jobs: allStrapiJob(sort: {fields: id, order: DESC}) {
      nodes {
        slug
      }
    }
  }
`)

  jobs.nodes.forEach(job => {
    createPage({
      path: `/careers/${job.slug}`,
      component: path.resolve('./src/templates/job-template.js'),
      context: { slug: job.slug }
    })
  })
}