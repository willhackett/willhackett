import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import 'typeface-montserrat';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  html, :root {
    font-size: 14px;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    padding: 0;
  }

  a {
    color: black;
  }
`;

export default {
  global: {
    font: {
      family: 'Montserrat',
      size: '14px',
      height: '20px'
    }
  }
};
