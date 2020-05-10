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
    <h2>Contact</h2>
    <ul>
      <li>
        <Link
          title="Connect on LinkedIn"
          href="https://www.linkedin.com/in/willhackett/"
        >
          LinkedIn
        </Link>
      </li>
      <li>
        <Link title="PGP Public Key" href="/pgp">
          PGP Public Key
        </Link>
      </li>
      <li>
        <Link title="Keybase" href="https://keybase.io/willhackett">
          Keybase
        </Link>
      </li>
    </ul>
  </Root>
);

export default Current;
