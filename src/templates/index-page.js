import React from 'react';
import { graphql } from 'gatsby'

import Homepage from '../components/Homepage'

export default Homepage

export const pageQuery = graphql`
  query Homepage($id: String!) {
    home:markdownRemark(id:{eq:$id}) {
      frontmatter{
        callToAction
        callToActionLink
      }
    }
    latest:allMarkdownRemark(
      filter:{frontmatter:{templateKey:{eq:"blog-post"}}},
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
            date(formatString: "Do MMM YY")
          }
        }
      }
    }
  }
`