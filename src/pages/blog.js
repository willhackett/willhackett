import React from 'react';
import { styled } from 'reakit';
import FluidContainer from '../components/FluidContainer';

const Section = styled('section')`
  display: block;
  margin: 2rem auto;
`;

const Grid = styled('div')`
  width: 100%;
  display: flex;
`;

const Article = styled('article')`
  display: flex;
  width: 33.3333%;
`;

const CardImg = styled('img')`
  display: block;
`;

const ArticleHeading = styled('h1')`
  font-size: 1rem;
`;

const Blog = () => (
  <FluidContainer>
    <Section>
      <h1>Blog</h1>
      <h2>Originals</h2>
      <p>
        I'm in the process of migrating content from Medium to this blog as well
        as introducing a collection of articles I find useful. These will be
        available soon.
      </p>
    </Section>
    <Section>
      <h2>Recommended reading</h2>
      <Grid>
        <Article>
          <CardImg />
          <ArticleHeading>Article Heading</ArticleHeading>
        </Article>
      </Grid>
    </Section>
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
