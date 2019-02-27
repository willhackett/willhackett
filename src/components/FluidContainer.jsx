import React from 'react';
import { styled } from 'reakit';

import breakpoints from './breakpoints';

const Container = styled('div')`
  width: 90%;
  ${breakpoints.md} {
    width: 700px;
  }
  ${breakpoints.lg} {
    width: 900px;
  }
  ${breakpoints.xl} {
    width: 1000px;
  }
`;

const FluidContainer = ({ children }) => <Container>{children}</Container>;

export default FluidContainer;
