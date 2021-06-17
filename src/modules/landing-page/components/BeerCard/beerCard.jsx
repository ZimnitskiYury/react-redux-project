import React from 'react';

import styles from './beerCard.css';
import BeerCardAddFavoriteButton from './BeerCardAddFavoriteButton';
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
      <BeerCardAddFavoriteButton />
    </div>
  </div>
);

export default BeerCard;
