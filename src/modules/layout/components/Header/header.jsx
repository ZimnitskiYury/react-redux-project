import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderBurgerSwitcher from 'Common/components/BurgerButton/burgerButton';
import { ReactComponent as KebabIcon } from 'Resources/svg/kebabMenuButton.svg';

import styles from './header.css';


function Header({ sidebarHandler }) {
  return (
    <header className={styles.header}>
      <HeaderBurgerSwitcher handler={sidebarHandler} />
      <Link to="/">
        <span className={styles.header__title}>Beer Catalog</span>
      </Link>
      <div className={styles.header__kebab}>
        <KebabIcon />
      </div>
    </header>
  );
}

Header.propTypes = {
  sidebarHandler: PropTypes.func.isRequired,
};

export default Header;
