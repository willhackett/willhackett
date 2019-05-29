import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setTheme } from '../modules/store'

import { IoIosSunny, IoIosMoon } from 'react-icons/io'

const Switch = styled.label`
  display: flex;
  position: relative;
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background: #302e2e;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + span:before {
    transform: translateX(1.5rem);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c8c8c8;
  transition: 0.3s;
  border-radius: 3rem;
  &:before {
    position: absolute;
    content: '';
    height: 1.1rem;
    width: 1.1rem;
    left: 0.22rem;
    bottom: 0.22rem;
    background: white;
    transition: 0.5s;
    border-radius: 50%;
  }
`

const Sun = styled(IoIosSunny)`
  transition: opacity 0.5s;
  position: absolute;
  height: 1rem;
  width: 1rem;
  bottom: 0.22rem;
  left: 0.28rem;
  color: ${props => props.theme.accentColor};
  ${props =>
    props.theme.name === 'dark' &&
    `
    opacity: 0;
  `}
`

const Moon = styled(IoIosMoon)`
  transition: opacity 0.5s;
  position: absolute;
  height: 1rem;
  width: 1rem;
  bottom: 0.22rem;
  right: 0.25rem;
  color: #685bde;
  ${props =>
    props.theme.name === 'light' &&
    `
    opacity: 0;
  `}
`

const DarkmodeToggle = ({ ui, dispatch }) =>
  console.log(ui) || (
    <Switch
      role="switch"
      aria-checked={ui === 'dark'}
      aria-label="Toggle Dark Mode"
    >
      <Input
        type="checkbox"
        checked={ui === 'dark'}
        onChange={e => dispatch(setTheme(e.target.checked ? 'dark' : 'light'))}
      />
      <Slider />
      <Sun />
      <Moon />
    </Switch>
  )

export default connect(state => ({
  ui: state.theme
}))(DarkmodeToggle)
