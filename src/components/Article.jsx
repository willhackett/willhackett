import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import breakpoints from './breakpoints'

const Container = styled('article')`
  position: relative;
  margin: 0;
  width: 100%;
  padding-top: 100%;
  transition: transform 0.25s ease-in-out;
  // &:hover {
  //   transform: scale(1.02);
  // }
  ${breakpoints.lg} {
    ${props => props.type === 'tall' && (
    `
    width: 50%;
    padding-top: 75%;
    `
  )}
    ${props => props.type === 'long' && (
    `
    width: 100%;
    padding-top: 56.25%;
    `
  )}
  }
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1.4rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 29px 80px -46px rgba(0,0,0,0.75);
  margin: 0.5rem;
  background: linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(106,106,106,1) 100%);
`

const Tag = styled('h2')`
  font-size: 1rem;
  font-weight: 200;
  text-transform: uppercase;
  color: white;
  opacity: 0.8;
  margin: 1rem 0;
  line-height: 1rem;
`

const Title = styled('h1')`
  font-size: 3rem;
  font-weight: 500;
  color: white;
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
  color: white;
  opacity: 0.9;
  margin: 0;
`

const ReadMore = styled(Link)`
  background: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  color: #2b2b2b;
  text-decoration: none;
  position: absolute;
  bottom: 2rem;
  transition: opacity 0.25s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const Article = ({ type = 'tall', tag, title }) => (
  <Container type={type}>
    <Inner>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <Description>Some micro description containing not many words.</Description>
      <ReadMore>Read</ReadMore>
    </Inner>
  </Container>
)

export default Article