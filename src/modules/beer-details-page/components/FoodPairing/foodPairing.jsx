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
      <ul className={styles['food-pairing']}>
        {foodPairing.map((
          element, index,
        ) => (
          <Dish
            dish={element}
            ind={index}
          />
        ))}
      </ul>
    </>
  );
}

function Dish({ dish, ind }) {
  return (
    <li
      className={styles.dish}
      key={ind}
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
  ind: PropTypes.number.isRequired,
};

export default FoodPairing;
