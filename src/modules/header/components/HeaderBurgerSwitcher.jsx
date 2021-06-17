import React from 'react';
import { useDispatch } from 'react-redux';
import toggleMenu from '../../side-bar/actions/SideBarActions';
import burgerIcon from '/src/resources/svg/burgerMenuButton.svg';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(toggleMenu());
    }
  };
  return (
    <div onClick={() => dispatch(toggleMenu())} role="button" tabIndex={0} onKeyPress={handleKeyPress}>
      <img src={burgerIcon} alt="burgerMenuButton.svg" />
    </div>
  );
};
export default BurgerMenu;
