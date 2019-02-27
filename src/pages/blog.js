import React from 'react';
import FluidContainer from '../components/FluidContainer';

const Blog = () => (
  <FluidContainer>
    <h1>Blog</h1>
    <h2>Migrating from Medium</h2>
    <p>
      I'm in the process of migrating content from Medium to this blog as well
      as introducing a collection of articles I find useful. These will be
      available soon.
    </p>
  </FluidContainer>
);
export default Blog;

// export const pageQuery = graphql`
//   query BlogQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
