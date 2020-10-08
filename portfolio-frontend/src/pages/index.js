import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({ data }) => {
   const {
     allStrapiProjects: { nodes: projects },
     allStrapiBlogs: { nodes: blogs },
   } = data
  return (
    <Layout>
      <SEO title="Hem" description="Startsidan" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="projekt i fokus" showLink /> 
      <Blogs blogs={blogs} title="Senaste artiklar" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        github
        id
        description
        Title
        url
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(locale: "sv", formatString: "DD MMM YYYY")
        id
        title
        category        
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`