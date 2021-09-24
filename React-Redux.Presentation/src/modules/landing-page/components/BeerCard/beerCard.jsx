import React from 'react';
import PropTypes from 'prop-types';

import ToggleFavoriteButton from 'features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';
import BeerCardOpenButton from 'modules/landing-page/components/BeerCardOpenButton/BeerCardOpenButton';

import styles from './beerCard.css';


function BeerCard({
  id, name, tagline, imageUrl, isFavorite, handler,
}) {
  return (
    <div className={styles['beer-card']}>
      <div className={styles['beer-card__photo-container']}>
        <img
          src={imageUrl}
          alt="Beer Card"
          className={styles['beer-card__photo']}
        />
      </div>
      <h1 className={styles['beer-card__title']}>
        {name}
      </h1>
      <span className={styles['beer-card__tags']}>
        {tagline}
      </span>
      <div className={styles['beer-card__buttons']}>
        <BeerCardOpenButton id={id} />
        <ToggleFavoriteButton
          isFavorite={isFavorite}
          handler={handler}
        />
      </div>
    </div>
  );
}

BeerCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};

BeerCard.defaultProps = {
  imageUrl: null,
};

export default BeerCard;
