// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"

import About from "../components/about"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const AboutIndex = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <About />
      <Bio />
    </Layout>
  )
}

export default AboutIndex

