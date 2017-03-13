import React from 'react';
import cn from 'classnames';

import styles from './style.css';

const Menu = props => (
  <nav className={cn(styles.menu, { [styles.active]: props.isOpenLeftPanel })}>
    <div onClick={props.toggleMenu}
         className={styles['toggle-btn']}>&#9776;</div>
  </nav>
);

export default Menu;
