import React from 'react';

import Link from './Link';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  h2 {
    font-size: 1.1rem;
    font-weight: 400;
    color: #bbb;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin-left: 1rem;
    li {
      margin: 0 0.5rem;
    }
  }
`;

const Current = () => (
  <Root>
    <h2>Current</h2>
    <ul>
      <li>
        <Link title="SEEK Limited" href="https://www.seek.com.au/">
          SEEK
        </Link>
      </li>
      <li>
        <Link title="Firelabs Pty Ltd" href="https://www.firelabs.com.au/">
          Firelabs
        </Link>
      </li>
      <li>
        <Link title="StartOut Australia" href="https://www.startout.org.au/">
          StartOut
        </Link>
      </li>
    </ul>
  </Root>
);

export default Current;
