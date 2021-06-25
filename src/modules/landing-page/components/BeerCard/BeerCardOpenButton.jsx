import React from 'react';
import { Link } from 'react-router-dom';
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

export default BeerCardOpenButton;
