import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { styled } from 'reakit'
import { Link } from 'gatsby'
import { css, keyframes } from 'styled-components'
import { IoIosRefreshCircle, IoIosShareAlt } from 'react-icons/io'
import CSSTransition from 'react-transition-group/CSSTransition'

import Article from '../components/Article'
import Container from '../components/Container'

const appear = keyframes`
  from {
    transform: translateY(25%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Hero = styled('div')`
  display: flex;
  margin: 4rem auto;
  flex-direction: column;
`

const H1 = styled('h1')`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 800;
  margin: 0rem 0 1rem 0;
  color: ${props => props.theme.linkColor};
`

const H2 = styled('h2')`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4rem;
  max-width: 35rem;
  color: #505050;
  margin: 0;
  color: ${props => props.theme.linkColor};
`

const Main = styled.div`
  max-width: 600px;
  margin: 6rem auto;
  & > * {
    opacity: 0;
    transform: translateY(20%);
    animation: 1s ease-out 0s 1 ${appear};
    animation-fill-mode: forwards;
  }
`

const SubTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme.linkColor};
`

const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.lineColor};
  margin: 1rem 0;
`

const ArchiveLinkCss = css`
  font-size: 0.9rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.lineColor};
  span {
    color: ${props => props.theme.linkColor};
  }
  small {
    line-height: 1.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.linkColor};
    white-space: nowrap;
  }
  span {
    line-height: 1.6rem;
    &:hover {
      color: ${props => props.theme.accentColor};
    }
  }
`

const CallToActionContainer = styled.a`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #bedeff;
  width: 100%;
  font-size: 0.9rem;
  padding: 0.8rem;
  color: #000a18;
  font-weight: 300;
`

const ArchiveLink = styled.a`
  ${ArchiveLinkCss}
`
const ArchiveIntLink = styled(Link)`
  ${ArchiveLinkCss}
`

const Homepage = ({
  newVersion,
  data: {
    home: { frontmatter: home } = {},
    latest: { edges: latest },
    tag: { frontmatter: tag } = {}
  },
  location
}) => (
  <Container>
    <Main>
      {(() => {
        if (home)
          return (
            <Hero>
              {newVersion ? (
                <CallToActionContainer
                  href="#"
                  onClick={() => window.location.reload()}
                >
                  A new version of this site is available. Reload now to see new
                  content.
                  <IoIosRefreshCircle size="1.3rem" />
                </CallToActionContainer>
              ) : (
                home.callToAction && (
                  <CallToActionContainer
                    target="_blank"
                    rel="noopener noreferrer"
                    href={home.callToActionLink}
                  >
                    {home.callToAction}
                    <IoIosShareAlt size="1.3rem" />
                  </CallToActionContainer>
                )
              )}
            </Hero>
          )
        if (tag)
          return (
            <Hero>
              <H1>{tag.title}</H1>
              <H2>{tag.description}</H2>
            </Hero>
          )
        return null
      })()}
      {latest.slice(0, 2).map(({ node: { id, frontmatter: post } }) => (
        <Article key={id} {...post} />
      ))}
      <SubTitle>Archive</SubTitle>
      {latest.slice(2).map(({ node: { id, frontmatter: post } }) =>
        post.postType === 'external-link' ? (
          <ArchiveLink key={id} href={post.path}>
            <span>{post.title}</span>{' '}
            <small>
              <time dateTime={post.isoDate}>{post.date}</time>
            </small>
          </ArchiveLink>
        ) : (
          <ArchiveIntLink key={id} to={post.path}>
            <span>{post.title}</span>{' '}
            <small>
              <time dateTime={post.isoDate}>{post.date}</time>
            </small>
          </ArchiveIntLink>
        )
      )}
    </Main>
  </Container>
)

export default connect(state => ({
  newVersion: state.newVersion
}))(Homepage)
