import React from 'react'
import styled from 'styled-components'

import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 8rem;
  line-height: 5rem;
  cursor: pointer;
  margin: 2rem;
  color: white;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`

export const DownArrow = () => (
  <Arrow>
    <FiChevronDown />
  </Arrow>
)

export const UpArrow = () => (
  <Arrow>
    <FiChevronUp />
  </Arrow>
)

export default UpArrow