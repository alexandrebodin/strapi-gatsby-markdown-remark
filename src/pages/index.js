import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { strapiArticle } = data
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{strapiArticle.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: strapiArticle.fields.markdownContent.childMarkdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    strapiArticle(strapiId: { eq: 1 }) {
      id
      title
      fields {
        markdownContent {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
