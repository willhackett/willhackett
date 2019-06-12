import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

import LazyLoader from './components/LazyLoader';

const Home = lazy(() => import('./pages/Home'));

const Router = () => (
  <>
    <Route exact path="/" component={LazyLoader(Home)} />
  </>
);

export default Router;
