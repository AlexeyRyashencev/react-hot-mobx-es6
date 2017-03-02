import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import Home from './views/home';

export default () => (
  <Router history={browserHistory}>
    <Route path='*' component={Home} />
  </Router>
);
