import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../../components/breakpoints'

export const BigText = styled.p`
  font-size: 3rem;
  color: white;
  line-height: 3.4rem;
  font-weight: 700;
  text-align: center;
  &:first-of-type {
    margin-block-start: 0;
  }
  &:last-of-type {
    margin-block-end: 0;
  }
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  text-align: center;
  max-width: 80%;
  ${breakpoints.md} {
    max-width: 50%;
  }
`

export const BigInput = styled.input`
  border: 2px solid ${props => props.theme.accentColor};
  ${props => {
    switch (props.displayType) {
      case 'success':
        return `border-color: green;`
      case 'error':
        return `border-color: red;`
    }
    return ``
  }}
  background: rgba(255, 255, 255, 0.03);
  color: white;
  border-radius: 6px;
  margin: 3.5rem 0;
  font-size: 2rem;
  padding: 0.5rem;
  line-height: 2.3rem;
  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`
