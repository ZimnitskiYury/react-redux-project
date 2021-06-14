// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styles from './beerCardTags.css';

const BeerCardTags = ({ tagline }) => (
  <span className={styles['beer-card__tags']}>
    {tagline.join(', ')}
  </span>
);

BeerCardTags.propTypes = {
  tagline: PropTypes.arrayOf(PropTypes.string),
};

BeerCardTags.defaultProps = {
  tagline: [],
};

export default BeerCardTags;
