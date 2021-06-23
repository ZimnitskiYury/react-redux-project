import React from 'react';
import PropTypes from 'prop-types';

import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';

import styles from './sidebar.css';


function Sidebar({ isOpen }) {
  return (
    <div className={isOpen ? `${styles.sidebar} ${styles.sidebar_open}` : styles.sidebar}>
      <ul className={styles.sidebar__nav}>
        <li className={styles['sidebar__nav-element']}>
          <InboxIcon />
          <span>Home</span>
        </li>
        <li className={styles['sidebar__nav-element']}>
          <StarIcon />
          <span>Favorites</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpen: false,
};
