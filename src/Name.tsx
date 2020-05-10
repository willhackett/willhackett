import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 3rem;
  }
  .invisible {
    opacity: 0;
  }
`;

const Name = () => (
  <Root>
    <a title="Will Hackett" href="/">
      <h1 itemProp="name">Will Hackett</h1>
    </a>
    <p>
      <span itemProp="addressLocality">Melbourne</span>,{' '}
      <span itemProp="addressRegion">Australia</span>.
    </p>
    <p className="invisible">
      <span itemProp="jobTitle">Senior Software Engineer</span>
    </p>
  </Root>
);

export default Name;
