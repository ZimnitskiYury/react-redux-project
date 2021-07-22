import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderBurgerSwitcher from 'common/components/BurgerButton/burgerButton';
import Authorization from 'features/authorization/components/Authorization/authorization';

import styles from './header.css';


function Header({ sidebarHandler }) {
  return (
    <header className={styles.header}>
      <HeaderBurgerSwitcher handler={sidebarHandler} />
      <Link to="/">
        <span className={styles.header__title}>Beer Catalog</span>
      </Link>
      <Authorization />
    </header>
  );
}

Header.propTypes = {
  sidebarHandler: PropTypes.func.isRequired,
};

export default Header;
