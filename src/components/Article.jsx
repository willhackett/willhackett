import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import breakpoints from './breakpoints'

const Container = styled('article')`
  display: flex;
  position: relative;
`

const Inner = styled.div`
  display: flex;
  flex: 2 0 67%;
  flex-direction: column;
`

const Tag = styled('h2')`
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.theme.linkColor};
  font-size: 0.8rem;
  line-height: 1rem;
  ${breakpoints.md} {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`

const linkStyles = css`
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-decoration: none;
  color: ${props => props.theme.linkColor};
  font-weight: 700;
  margin: 0;
  &:hover {
    color: ${props => props.theme.accentColor};
  }
  ${breakpoints.md} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`

const Title = styled(Link)`
  ${linkStyles}
`
const TitleExt = styled('a')`
  ${linkStyles}
`

const Description = styled('p')`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 100;
  opacity: 0.9;
  margin: 0;
  color: ${props => props.theme.linkColor};
`

const imageContainerStyles = css`
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 4rem;
  padding-right: 1rem;
  flex: 1 0 33%;
  ${breakpoints.md} {
    padding-right: 3rem;
  }
  img {
    height: 10rem;
    width: 7rem;
    min-width: 7rem;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 6px;
    ${breakpoints.md} {
      min-width: 11rem;
      height: 15rem;
      width: 11rem;
    }
  }
`

const ImageContainerA = styled.a`
  ${imageContainerStyles}
`
const ImageContainerLink = styled(Link)`
  ${imageContainerStyles}
`

const Article = ({ title, tag, path, description, image, postType }) => (
  <Container>
    {postType === 'internal-link' && (
      <ImageContainerLink to={path}>
        <img src={image && image.publicURL} alt={title} />
      </ImageContainerLink>
    )}
    {postType === 'external-link' && (
      <ImageContainerA href={path} rel="noopener" target="_blank">
        <img src={image && image.publicURL} alt={title} />
      </ImageContainerA>
    )}
    <Inner>
      <Tag>{tag}</Tag>
      {postType === 'internal-link' && <Title to={path}>{title}</Title>}
      {postType === 'external-link' && (
        <TitleExt href={path} rel="noopener" target="_blank">
          {title}
        </TitleExt>
      )}
      <Description>{description}</Description>
    </Inner>
  </Container>
)

export default Article
