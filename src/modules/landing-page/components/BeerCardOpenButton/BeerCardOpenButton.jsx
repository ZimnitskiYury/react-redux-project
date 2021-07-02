import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './beerCardOpenButton.css';


function BeerCardOpenButton({ id }) {
  return (
    <Link
      className={styles['open-button']}
      type="button"
      to={`/beer/${id}`}
    >
      Open
    </Link>
  );
}

BeerCardOpenButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default BeerCardOpenButton;
