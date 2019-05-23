import React from 'react';
import { styled } from 'reakit';
import Container from './Container';

import breakpoints from './breakpoints';

const Inner = styled('div')`
  width: 90%;
  margin-top: ${props => props.top || 'inherit'};
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

const FluidContainer = ({ children, top, ...rest }) => (
  <Container {...rest}>
    <Inner top={top}>{children}</Inner>
  </Container>
);

export default FluidContainer;
