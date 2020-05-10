import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from './theme';
import Home from './Home';
import Container from './Container';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  </ThemeProvider>,
  document.getElementById('root')
);

if (window.location.hostname === 'localhost') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
