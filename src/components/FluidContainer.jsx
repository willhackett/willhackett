import React from 'react';
import { styled } from 'reakit';
import Container from './Container';

import breakpoints from './breakpoints';

const Inner = styled('div')`
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

const FluidContainer = ({ children }) => (
  <Container>
    <Inner>{children}</Inner>
  </Container>
);

export default FluidContainer;
