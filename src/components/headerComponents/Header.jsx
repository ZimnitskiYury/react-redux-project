// @ts-nocheck
import React from 'react';
import HeaderBurgerSwitcher from './HeaderBurgerSwitcher';
import HeaderKebabSwitcher from './HeaderKebabSwitcher';
import HeaderGetRandomBeerButton from './HeaderGetRandomBeerButton';
import HeaderTitle from './HeaderTitle';
import styles from './header.css';

const Header = () => (
  <header className={styles.header}>
    <HeaderBurgerSwitcher />
    <HeaderTitle />
    <HeaderGetRandomBeerButton />
    <HeaderKebabSwitcher />
  </header>
);

export default Header;
