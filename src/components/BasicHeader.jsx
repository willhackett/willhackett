import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaChevronLeft } from 'react-icons/fa'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  z-index: 10;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`

const HeaderLogoLink = styled(Link)`
  color: ${props => props.color || '#FFFFFF'}
  text-decoration: none;
  font-weight: 700;
  margin: 0;
  line-height: 1.4rem;
  font-size: 1.4rem;
`

const BasicHeader = ({ color }) => (
  <HeaderContainer>
    <HeaderLogoLink to="/" color={color}>
      <FaChevronLeft size="1rem" />
      Will Hackett
    </HeaderLogoLink>
  </HeaderContainer>
)

export default BasicHeader
