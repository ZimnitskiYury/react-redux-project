import React from 'react';
import ToggleFavoriteButton from '/src/features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';
import styles from './favoriteBeer.css';

const FavoriteBeer = ({ beer }) => (
  <div className={styles['favorite-beer']}>
    <div className={styles['favorite-beer__info']}>
      <h1 className={styles['favorite-beer__title']}>
        {beer.name}
      </h1>
      <span className={styles['favorite-beer__tags']}>
        {beer.tagline}
      </span>
      <p className={styles['favorite-beer__description']}>
        {beer.description}
      </p>
      <div>
        <ToggleFavoriteButton beer={beer} />
      </div>
    </div>
    <div className={styles['favorite-beer__photo']} style={{ backgroundImage: `url(${beer.image_url})` }} />
  </div>
);

export default FavoriteBeer;
