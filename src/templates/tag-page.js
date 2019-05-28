import React from 'react';
import { graphql } from 'gatsby'

import Homepage from '../components/Homepage'

export default Homepage

export const pageQuery = graphql`
  query TagPage($id: String!, $frontmatter___tag: String!) {
    home:markdownRemark(fields:{slug:{eq:"/"}}) {
      id
      frontmatter{
        bioText
      }
    }
    tag:markdownRemark(id: { eq: $id }) {
      id
      frontmatter{
        title
        description
      }
    }
    latest:allMarkdownRemark(
      limit:2,
      filter:{frontmatter:{templateKey:{eq:"blog-post"},tag:{eq:$frontmatter___tag}}},
      sort:{fields:[frontmatter___date], order: [DESC]}
      ) {
      edges{
        node{
          id
          frontmatter{
            title
            path
            description
            image
            tag
            postType
            date
          }
        }
      }
    }
  }
`