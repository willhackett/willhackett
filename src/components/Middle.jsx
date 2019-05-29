import styled from 'styled-components'
import { Block } from 'reakit'
import breakpoints from './breakpoints'

const Middle = styled(Block)`
  margin: auto;
  width: 95%;
  max-width: 95%;
  margin-top: 3.5rem;
  ${breakpoints.sm} {
    width: 540px;
    max-width: 540px;
  }
  ${breakpoints.md} {
    width: 720px;
    max-width: 720px;
  }
  ${breakpoints.lg} {
    width: 960px;
    max-width: 960px;
  }
  ${breakpoints.xl} {
    width: 1140px;
    max-width: 1140px;
  }
`

export default Middle
