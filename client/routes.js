import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import App from './views/app';
import Home from './views/home';

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
    </Route>
  </Router>
);
