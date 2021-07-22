import React from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '@material-ui/icons/Settings';

import styles from './method.css';


function Method({ method }) {
  return (
    <>
      <header className={styles.method__header}>
        <SettingsIcon />
        Method
      </header>
      <ul>
        <Fermentation fermentation={method.fermentation} />
        <Mash mash={method.mash_temp} />
        <Twist twist={method.twist} />
      </ul>
    </>
  );
}

function Fermentation({ fermentation }) {
  return (
    <li className={styles.method__category}>
      <p className={styles['method__category-title']}>Fermentation</p>
      <p className={styles['method__category-values']}>
        {`Perform at ${fermentation.temp.value} °C`}
      </p>
    </li>
  );
}

function Mash({ mash }) {
  return (
    <li className={styles.method__category}>
      <p className={styles['method__category-title']}>Mash</p>
      {mash.map((
        element, index,
      ) => (
        <p
          className={styles['method__category-values']}
          key={index}
        >
          {`${element.duration} minutes at ${element.temp.value} °C`}
        </p>
      ))}
    </li>
  );
}

function Twist({ twist }) {
  return (
    <li className={styles.method__category}>
      <p className={styles['method__category-title']}>Twist</p>
      <p className={styles['method__category-values']}>
        {(twist) || 'Without twist'}
      </p>
    </li>
  );
}

Method.propTypes = {
  method: PropTypes.shape({
    fermentation: Fermentation.isRequired,
    mash_temp: Mash.isRequired,
    twist: Twist.isRequired,
  }).isRequired,
};

Fermentation.propTypes = {
  fermentation: PropTypes.shape({
    temp: PropTypes.shape({
      unit: PropTypes.string,
      value: PropTypes.number,
    }),
  }).isRequired,
};

Mash.propTypes = {
  mash: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.number,
    temp: PropTypes.shape({
      unit: PropTypes.string,
      value: PropTypes.number,
    }),
  })).isRequired,
};

Twist.propTypes = {
  twist: PropTypes.string,
};

Twist.defaultProps = {
  twist: null,
};

export default Method;
