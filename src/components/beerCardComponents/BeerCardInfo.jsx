// @ts-nocheck
import React from 'react';
import BeerCardTitle from './BeerCardTitle';
import BeerCardTags from './BeerCardTags';
import BeerCardOpenButton from './BeerCardOpenButton';
import BeerCardAddFavoriteButton from './BeerCardAddFavoriteButton';
import styles from './beerCardInfo.css';

const BeerCardInfo = () => (
  <div className={styles['beer-card__info']}>
    <BeerCardTitle />
    <BeerCardTags />
    <div className={styles['beer-card__info_buttons']}>
      <BeerCardOpenButton />
      <BeerCardAddFavoriteButton />
    </div>
  </div>
);

export default BeerCardInfo;
