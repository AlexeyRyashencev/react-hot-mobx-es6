import React from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

/* components */
import Menu from '../components/menu';

/* stores */
import leftMenuStore from '../stores/menu';

/* styles */
import './global.css';
import style from './app.css';

useStrict(true);

const stores = { leftMenuStore };

const App = props => (
  <Provider { ...stores }>
    <div className={style['app-container']}>
      <Menu />
      <div className={style['page-container']}>
        {props.children}
      </div>
    </div>
  </Provider>
);

export default App;
