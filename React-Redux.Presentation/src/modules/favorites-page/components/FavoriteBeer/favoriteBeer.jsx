import React from 'react';
import PropTypes from 'prop-types';

import ToggleFavoriteButton from 'Features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';

import styles from './favoriteBeer.css';


function FavoriteBeer({
  name, tagline, description, imageUrl, removeFavoriteHandler,
}) {
  return (
    <div className={styles['favorite-beer']}>
      <div className={styles['favorite-beer__info']}>
        <h1 className={styles['favorite-beer__title']}>
          {name}
        </h1>
        <span className={styles['favorite-beer__tags']}>
          {tagline}
        </span>
        <p className={styles['favorite-beer__description']}>
          {description}
        </p>
        <div>
          <ToggleFavoriteButton
            isFavorite
            handler={removeFavoriteHandler}
          />
        </div>
      </div>
      <div className={styles['favorite-beer__photo-container']}>
        <img
          src={imageUrl}
          alt="Favorite Beer"
          className={styles['favorite-beer__photo']}
        />
      </div>
    </div>
  );
}

FavoriteBeer.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  removeFavoriteHandler: PropTypes.func.isRequired,
};

export default FavoriteBeer;

