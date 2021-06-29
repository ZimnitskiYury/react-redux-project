import React from 'react';
import PropTypes from 'prop-types';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './toggleFavoriteButton.css';


const classNames = require('classnames');


function ToggleFavoriteButton({ isFavorite, handler }) {
  const className = classNames(
    'favorite-button',
    { 'favorite-button_remove': isFavorite },
  );

  return (
    <button
      className={className}
      type="button"
      onClick={handler}
    >
      {isFavorite
        ? (<FavoriteIcon />)
        : (<FavoriteBorderIcon />) }
      <span>Favorite</span>
    </button>
  );
}

ToggleFavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  handler: PropTypes.func.isRequired,
};

ToggleFavoriteButton.defaultProps = {
  isFavorite: false,
};

export default ToggleFavoriteButton;
