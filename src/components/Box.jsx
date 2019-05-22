import React from 'react'
import styled from 'styled-components'
import { Block } from 'reakit'

import breakpoints from './breakpoints'

const StyledBlock = styled(Block)`
  margin: auto;
  max-width: 95%;
  ${breakpoints.sm} {
    max-width: 540px;
  }
  ${breakpoints.md} {
    max-width: 720px;
  }
  ${breakpoints.lg} {
    max-width: 960px;
  }
  ${breakpoints.xl} {
    max-width: 1140px;
  }
`;

export default StyledBlock