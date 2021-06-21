import React from 'react';
import { useDispatch } from 'react-redux';

import toggleMenu from 'Modules/sidebar/actions/sideBarActions';

import { ReactComponent as BurgerIcon } from 'Resources/svg/burgerMenuButton.svg';

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