import React from 'react';
import { inject } from 'mobx-react';

import LeftPanelController from './left-panel-controller';

const Component = inject('leftMenuStore')(({ leftMenuStore }) => {
  return (
    <LeftPanelController
      openPanel={() => leftMenuStore.openLeftPanel()}
      closePanel={() => leftMenuStore.closeLeftPanel()} />
  );
});

Component.displayName = 'LeftPanelControllerContainer';
export default Component;
