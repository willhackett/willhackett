import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import theme, { GlobalStyle } from './theme';
import { Grommet } from 'grommet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Grommet theme={theme}>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  </Grommet>,
  document.getElementById('root')
);

serviceWorker.register();
