import React from 'react';
import { observer, inject } from 'mobx-react';

import UserList from './user-list';

const Component = inject('userStore')(observer(({ userStore }) => {
  return (
    <UserList
      users={userStore.getUsers()}
      selectedUsersCount={userStore.selectedCount} />
  );
}));

Component.displayName = 'UserList';
export default Component;
