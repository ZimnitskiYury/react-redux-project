// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBurgerSwitcher from '../BurgerButton/burgerButton';
import kebabIcon from '/src/resources/svg/kebabMenuButton.svg';
import styles from './header.css';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderBurgerSwitcher />
      <Link to="/">
        <span className={styles.header__title}>Beer Catalog</span>
      </Link>
      <div className={styles.header__kebab}>
        <img src={kebabIcon} alt="kebabMenuButton.svg" />
      </div>
    </header>
  );
}

export default Header;
