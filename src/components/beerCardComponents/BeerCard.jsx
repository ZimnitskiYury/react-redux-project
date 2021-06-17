import React from 'react';
import styles from './beerCard.css'
import BeerCardAddFavoriteButton from './BeerCardAddFavoriteButton';
import BeerCardOpenButton from './BeerCardOpenButton';
import BeerCardPhoto from './BeerCardPhoto';
import BeerCardTags from './BeerCardTags';
import BeerCardTitle from './BeerCardTitle';

const BeerCard = ({ beer }) => (
  <div className={styles.beerCard}>
    <BeerCardPhoto imageUrl={beer["image_url"]} />
    <BeerCardTitle name={beer.name} />
    <BeerCardTags tagline={beer.tagline} />
    <div>
      <BeerCardOpenButton />
      <BeerCardAddFavoriteButton />
    </div>
  </div>
);

export default BeerCard;
