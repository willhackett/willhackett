import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'teardrop';

ReactDOM.render(
  <BrowserRouter>
    {routerProps => <App {...routerProps} />}
  </BrowserRouter>,
  document.getElementById('root')
);
