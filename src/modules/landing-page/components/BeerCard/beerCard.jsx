import React from 'react';
import ToggleFavoriteButton from '/src/features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';

import styles from './beerCard.css';

import BeerCardOpenButton from './BeerCardOpenButton';

const BeerCard = ({ beer }) => (
  <div className={styles['beer-card']}>
    <div className={styles['beer-card__photo']} style={{ backgroundImage: `url(${beer.image_url})` }} />
    <h1 className={styles['beer-card__title']}>
      {beer.name}
    </h1>
    <span className={styles['beer-card__tags']}>
      {beer.tagline}
    </span>
    <div>
      <BeerCardOpenButton />
      <ToggleFavoriteButton beer={beer} />
    </div>
  </div>
);

export default BeerCard;
