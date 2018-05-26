// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Maybe } from 'monet'

import Entry from './components/Entry'
import registerServiceWorker from './utils/registerServiceWorker';

import './styles/iconsmind.css'
import './styles/socicon.css'
import './styles/bootstrap.css'
import './styles/theme-charcoal.css'

ReactDOM.render(
  <BrowserRouter>
    <Entry />
  </BrowserRouter>,
  Maybe.fromNull(document.getElementById('root')).orSome()
);

registerServiceWorker();
