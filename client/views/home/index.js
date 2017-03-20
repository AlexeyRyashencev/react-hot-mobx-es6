import React from 'react';
import LeftPanelController from '../../components/left-panel-controller';
import UserList from '../../components/user-list';

const Home = () => (
  <div>
    <h1>Left panel controller</h1>
    <LeftPanelController />
    <h1>Users from server</h1>
    <UserList />
  </div>
);
export default Home;

