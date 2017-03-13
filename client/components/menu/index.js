import React from 'react';
import { observer, inject } from 'mobx-react';

import Menu from './menu'

const Component = inject('leftMenuStore')(observer(({ leftMenuStore }) => (
  <Menu
    toggleMenu={() => leftMenuStore.toggleLeftPanel()}
    isOpenLeftPanel={leftMenuStore.isOpenLeftPanel} />
)));

Component.displayName = 'MenuContainer';
export default Component;
