import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerIcon } from 'Resources/svg/burgerMenuButton.svg';


function BurgerMenu({ handler }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handler();
    }
  };
  return (
    <div onClick={handler} role="button" tabIndex={0} onKeyPress={handleKeyPress}>
      <BurgerIcon fill="#FFFFFF" />
    </div>
  );
}

export default BurgerMenu;

BurgerMenu.propTypes = {
  handler: PropTypes.func.isRequired,
};
