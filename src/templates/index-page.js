import React from 'react';
import { connect } from 'react-redux';
import { styled } from 'reakit';
import { Link, graphql } from 'gatsby'
import { css } from 'styled-components'

import Article from '../components/Article'
import Container from '../components/Container';

const Hero = styled('div')`
  display: flex;
  margin: 4rem auto;
  flex-direction: column;
`;

const H1 = styled('h1')`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 800;
  margin: 2rem 0 1rem 0;
`;

const H2 = styled('h2')`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4rem;
  max-width: 35rem;
  color: #505050;
  margin: 0;
`;

const Main = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const SubTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`

const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.lineColor};
  margin: 1rem 0;
`

const ArchiveLinkCss = css`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.linkColor};
  line-height: 2rem;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.lineColor};
  span {
    &:hover {
      opacity: 0.8;
    }
  }
`

const ArchiveLink = styled.a`${ArchiveLinkCss}`
const ArchiveIntLink = styled(Link)`${ArchiveLinkCss}`


const Homepage = ({ data: { home: { frontmatter: home }, latest: { edges: latest } } }) => console.log(home, latest) || (
  <Container>
    <Main>
      <Hero>
        <H1>
          Will Hackett
        </H1>
        <H2>
          {home.bioText}
          <br />
          <Link to="/about">Read more.</Link>
        </H2>
      </Hero>
      {latest.map(({ node: { id, frontmatter: post } }) => (
        <Article
          key={id}
          {...post}
        />
      ))}
      <SubTitle>Archive</SubTitle>
      <ArchiveLink href="234">
        <span>Some really long title link type thing</span> <small>May 10</small>
      </ArchiveLink>
    </Main>
  </Container>
);

export default connect()(Homepage);

export const pageQuery = graphql`
  query Homepage($id: String!) {
    home:markdownRemark(id: { eq: $id }) {
      frontmatter{
        bioText
      }
    }
    latest:allMarkdownRemark(limit:4, filter:{frontmatter:{templateKey:{eq:"blog-post"}}}) {
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
          }
        }
      }
    }
  }
`