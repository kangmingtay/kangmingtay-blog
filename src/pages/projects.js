// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"

import ProjectList from "../../content/projects/project-list"
import ProjectCard from "../components/projectCard"
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
  }
`

const AboutIndex = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const projectList = ProjectList.map(item => {
      return (
        <ProjectCard 
            key={item.title}
            title={item.title} 
            desc={item.description} 
            links={item.links} 
        />
      )
  });
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Projects" />
      {projectList}
      <Bio />
    </Layout>
  )
}

export default AboutIndex

