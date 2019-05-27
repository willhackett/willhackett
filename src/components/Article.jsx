import React from 'react'
import styled, { css } from 'styled-components';
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
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.3rem;
`

const linkStyles = css`
  font-size: 2rem;
  text-decoration: none;
  color: ${props => props.theme.linkColor};
  font-weight: 700;
  margin: 0;
  line-height: 4rem;
  &:hover {
    opacity: 0.8;
  }
  ${breakpoints.md} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`

const Title = styled(Link)`${linkStyles}`
const TitleExt = styled('a')`${linkStyles}`

const Description = styled('p')`
  font-size: 1rem;
  font-weight: 100;
  opacity: 0.9;
  margin: 0;
`

const imageContainerStyles = css`
  display: flex;
  flex: 1 0 33%;
  align-items: flex-start;
  min-width: 10rem;
  overflow: hidden;
  margin-bottom: 4rem;
  padding-right: 4rem;
  img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 6px;
  }
`

const ImageContainerA = styled.a`${imageContainerStyles}`
const ImageContainerLink = styled(Link)`${imageContainerStyles}`

const Article = ({ title, tag, path, description, image, postType }) => (
  <Container>
    {postType === 'internal-link' && (
      <ImageContainerLink to={path}>
        <img src={image} alt={title} />
      </ImageContainerLink>
    )}
    {postType === 'external-link' && (
      <ImageContainerA href={path} rel="noopener" target="_blank">
        <img src={image} alt={title} />
      </ImageContainerA>
    )}
    <Inner>
      <Tag>{tag}</Tag>
      {postType === 'internal-link' && (
        <Title to={path}>{title}</Title>
      )}
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