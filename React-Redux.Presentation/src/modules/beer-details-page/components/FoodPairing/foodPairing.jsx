import React from 'react';
import PropTypes from 'prop-types';

import FastfoodIcon from '@material-ui/icons/Fastfood';

import styles from './foodPairing.css';


function FoodPairing({ foodPairing }) {
  return (
    <>
      <header className={styles['food-pairing__header']}>
        <FastfoodIcon />
        <span>Food Pairing</span>
      </header>
      <ul>
        {foodPairing.map((
          element, index,
        ) => (
          <Dish
            dish={element}
            key={index}
          />
        ))}
      </ul>
    </>
  );
}

function Dish({ dish }) {
  return (
    <li
      className={styles.dish}
    >
      {dish}
    </li>
  );
}

FoodPairing.propTypes = {
  foodPairing: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Dish.propTypes = {
  dish: PropTypes.string.isRequired,
};

export default FoodPairing;
