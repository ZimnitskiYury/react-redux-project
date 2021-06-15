// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styles from './beerCardTags.css';

const BeerCardTags = ({ tagline }) => (
  <span className={styles['beer-card__tags']}>
    {tagline}
  </span>
);

BeerCardTags.propTypes = {
  tagline: PropTypes.string,
};

BeerCardTags.defaultProps = {
  tagline: undefined,
};

export default BeerCardTags;
