import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import 'typeface-montserrat';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap');

  html, :root {
    font-size: 14px;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    padding: 0;
    background: black;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    front-weight: 400;
  }

  a {
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
  }

  h1 {
    font-weight: 900;
  }
`;

export default {
  global: {
    font: {
      family: 'Source Sans Pro',
      size: '14px',
      height: '20px'
    }
  }
};
