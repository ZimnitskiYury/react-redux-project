import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderBurgerSwitcher from 'Common/components/BurgerButton/burgerButton';
import Authorization from 'Features/authorization/components/Authorization/authorization';

import styles from './header.css';


function Header({ sidebarHandler }) {
  return (
    <header className={styles.header}>
      <HeaderBurgerSwitcher handler={sidebarHandler} />
      <Link to="/">
        <span className={styles.header__title}>Beer Catalog</span>
      </Link>
      <Authorization isLogged={false} />
    </header>
  );
}

Header.propTypes = {
  sidebarHandler: PropTypes.func.isRequired,
};

export default Header;
