import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM  from 'react-dom';
import AppRouter from './routes';

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

render(AppRouter);
if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./routes');
    render(AppRouter);
  });
}

