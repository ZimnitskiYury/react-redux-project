import React from 'react';
import PropTypes from 'prop-types';

import styles from './toggleFavoriteButton.css';


function ToggleFavoriteButton({ isFavorite, handler }) {
  return (
    <button className={styles['favorite-button']} type="button" onClick={handler}>
      {isFavorite ? 'Remove ' : 'Add '}
      Favorite
    </button>
  );
}

export default ToggleFavoriteButton;

ToggleFavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  handler: PropTypes.func.isRequired,
};

ToggleFavoriteButton.defaultProps = {
  isFavorite: false,
};
