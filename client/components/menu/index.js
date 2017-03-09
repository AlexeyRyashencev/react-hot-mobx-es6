import React from 'react';

import styles from './style.css';

const Menu = () => (
  <nav className={styles.menu}>
    <div className={styles['toggle-btn']}>&#9776;</div>
  </nav>
);

export default Menu;