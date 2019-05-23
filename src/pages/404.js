import React from 'react';
import { Link } from 'gatsby'
import FluidContainer from '../components/FluidContainer';
import styled from 'styled-components'
import breakpoints from '../components/breakpoints'

const Big404 = styled.h1`
  font-size: 14rem;
  ${breakpoints.md} {
    font-size: 20rem;
  }
  ${breakpoints.lg} {
    font-size: 30rem;
  }
`

const NotFoundPage = () => (
  <FluidContainer>
    <Big404>
      404
    </Big404>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you've requested does not exist or may have moved.</p>
    <p>
      <Link to="/">Homepage</Link>
    </p>
  </FluidContainer>
);

export default NotFoundPage;
