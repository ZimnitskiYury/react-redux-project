// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styles from './beerCardTitle.css';

const BeerCardTitle = ({ name }) => (
  <h1 className={styles['beer-card__title']}>
    {name}
  </h1>
);

BeerCardTitle.propTypes = {
  name: PropTypes.string,
};

BeerCardTitle.defaultProps = {
  name: 'Beer Title',
};

export default BeerCardTitle;
