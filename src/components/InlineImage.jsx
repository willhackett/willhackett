import React from 'react';
import { styled } from 'reakit';

import breakpoints from './breakpoints';

const Img = styled('img')`
  margin: 0.5rem;
  max-width: 100%;
  ${breakpoints.md} {
    float: ${props => props.floatDirection};
    margin: ${props =>
      props.floatDirection === 'right'
        ? '2rem -5rem 2rem 2rem'
        : '2rem 2rem 2rem -5rem'};
    width: 30rem;
  }
`;

const InlineImage = ({ src, float }) => (
  <Img src={src} floatDirection={float} />
);

export default InlineImage;
