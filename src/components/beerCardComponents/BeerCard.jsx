import React from 'react';
import PropTypes from 'prop-types';
import styles from './beerCard.css'
import BeerCardAddFavoriteButton from './BeerCardAddFavoriteButton';
import BeerCardOpenButton from './BeerCardOpenButton';
import BeerCardPhoto from './BeerCardPhoto';
import BeerCardTags from './BeerCardTags';
import BeerCardTitle from './BeerCardTitle';

const BeerCard = ({ beer }) => (
  <div className={styles.beerCard}>
    <BeerCardPhoto beer={beer} />
    <BeerCardTitle beer={beer} />
    <BeerCardTags beer={beer} />
    <div>
      <BeerCardOpenButton />
      <BeerCardAddFavoriteButton />
    </div>
  </div>
);

BeerCard.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    tagline: PropTypes.string,
  }),
};

BeerCard.defaultProps = {
  beer: undefined,
};

export default BeerCard;
