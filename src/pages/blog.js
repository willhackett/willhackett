import React, { Component } from 'react';
import { styled } from 'reakit';
import map from 'lodash/map';

import FluidContainer from '../components/FluidContainer';

import db from '../modules/db';
import breakpoints from '../components/breakpoints';

const Section = styled('section')`
  display: block;
  margin: 2rem auto;
`;

const Grid = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
  }
`;

const Article = styled('article')`
  display: flex;
  width: 100%;
  a {
    display: flex;
    color: ${props => props.theme.linkColor};
    text-decoration: none;
    flex-direction: row;
    ${breakpoints.md} {
      flex-direction: column;
    }
  }
  a:hover {
    color: #2b2b2b;
  }
  ${breakpoints.md} {
    width: 33.3333%;
    padding: 1rem;
  }
`;

const CardImg = styled('div')`
  display: block;
  width: 100%;
  height: 3rem;
  ${breakpoints.md} {
    height: 10rem;
  }
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  img {
    height: 100%;
    width: 100%;
  }
`;

const ArticleHeading = styled('h1')`
  font-size: 1.125rem;
  height: 3rem;
  margin: 0;
  ${breakpoints.md} {
    margin: 2rem auto;
  }
`;

const ArticleBlurb = styled('p')`
  font-size: 1rem;
`;

class Blog extends Component {
  state = {
    articles: {}
  };
  componentDidMount() {
    db.bindToState('home/articles', {
      context: this,
      state: 'articles',
      queries: {
        limitToLast: 3
      }
    });
  }
  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <FluidContainer>
        <Section>
          <h1>Blog</h1>
          <h2>Originals</h2>
          <p>
            I'm in the process of migrating content from Medium to this blog as
            well as introducing a collection of articles I find useful. These
            will be available soon.
          </p>
        </Section>
        {articles && (
          <Section>
            <h2>Recommended reading</h2>
            <Grid>
              {map(articles, (data, id) => (
                <Article key={id}>
                  <a
                    href={data.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    alt={data.title}
                  >
                    <CardImg>
                      <img src={data.image} alt={data.title} />
                    </CardImg>
                    <div>
                      <ArticleHeading>{data.title}</ArticleHeading>
                      <ArticleBlurb>{data.excerpt}</ArticleBlurb>
                    </div>
                  </a>
                </Article>
              ))}
            </Grid>
          </Section>
        )}
      </FluidContainer>
    );
  }
}
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
