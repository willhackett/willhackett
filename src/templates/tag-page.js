import React from 'react';
import { graphql } from 'gatsby'

import Homepage from '../components/Homepage'

export default Homepage

export const pageQuery = graphql`
  query TagPage($id: String!, $tag: String!) {
    tag:markdownRemark(id: { eq: $id }) {
      frontmatter{
        title
        description
      }
    }
    latest:allMarkdownRemark(
      filter:{frontmatter:{templateKey:{eq:"blog-post"},tag:{eq:$tag}}},
      sort:{fields:[frontmatter___date], order: [DESC]}
      ) {
      edges{
        node{
          id
          frontmatter{
            title
            path
            description
            image{
              publicURL
            }
            tag
            postType
            date
          }
        }
      }
    }
  }
`