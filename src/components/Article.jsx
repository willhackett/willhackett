import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import breakpoints from './breakpoints'

import dmps from '../img/assets/does-my-password-suck.png'

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

const Title = styled('h1')`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  line-height: 4rem;
  ${breakpoints.md} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`

const Description = styled('p')`
  font-size: 1rem;
  font-weight: 100;
  opacity: 0.9;
  margin: 0;
`

const ImageContainer = styled.div`
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

const Article = ({ type = 'tall', tag, title }) => (
  <Container type={type}>
    <ImageContainer>
      <img src={dmps} alt="Does my password suck?" />
    </ImageContainer>
    <Inner>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <Description>Some micro description containing not many words.</Description>
    </Inner>
  </Container>
)

export default Article