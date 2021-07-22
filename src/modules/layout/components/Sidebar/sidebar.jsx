import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InboxIcon from '@material-ui/icons/Inbox';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './sidebar.css';


function Sidebar({ isOpen }) {
  return (
    <div className={classNames(
      'sidebar',
      { sidebar_open: isOpen },
    )}
    >
      <ul className={styles.sidebar__nav}>
        <li>
          <Link
            className={styles['sidebar__nav-element']}
            to="/"
          >
            <InboxIcon />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            className={styles['sidebar__nav-element']}
            to="/favorites"
          >
            <FavoriteIcon />
            <span>Favorites</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
