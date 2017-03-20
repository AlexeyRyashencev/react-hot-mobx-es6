import React from 'react';

const UserListItem = props => (
  <li><input type="checkbox" checked={props.isChecked} onClick={() => props.onToggle()} />{props.text}
  </li>
);
export default UserListItem;
