import React from 'react';
import { useDispatch } from 'react-redux';
import toggleMenu from '/src/modules/sidebar/actions/sideBarActions';
import { ReactComponent as BurgerIcon } from '/src/resources/svg/burgerMenuButton.svg';
import styles from './burgerButton';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(toggleMenu());
    }
  };
  return (
    <div onClick={() => dispatch(toggleMenu())} role="button" tabIndex={0} onKeyPress={handleKeyPress}>
      <BurgerIcon fill="#FFFFFF" />
    </div>
  );
};
export default BurgerMenu;
