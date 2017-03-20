import React from 'react';

/* components */
import UserListItem from './user-list-item';

/* styles */
import style from './styles.css';

const UserList = props => {
  return (
    <div className={style.container}>
      <ul>
        {props.users.map(userStore => {
          return (
            <UserListItem
              key={userStore.user.get('id')}
              isChecked={userStore.user.get('checked')}
              text={userStore.userInfo}
              onToggle={() => userStore.toggle()} />);
        })}
      </ul>
      <span>{`Users:${props.users.length}`}</span>
      <span>{`Selected users: ${props.selectedUsersCount}`}</span>
    </div>
  );
};

export default UserList;
