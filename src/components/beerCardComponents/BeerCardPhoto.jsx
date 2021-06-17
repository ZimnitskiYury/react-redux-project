import React from 'react';
import PropTypes from 'prop-types';
import styles from './beerCardPhoto.css';

const BeerCardPhoto = ({ imageUrl }) => (
  <div>
    <img className={styles['beer-card__photo']} src={imageUrl} alt={imageUrl} />
  </div>
);

BeerCardPhoto.propTypes = {
  imageUrl: PropTypes.string,
};
BeerCardPhoto.defaultProps = {
  imageUrl: undefined,
};

export default BeerCardPhoto;
