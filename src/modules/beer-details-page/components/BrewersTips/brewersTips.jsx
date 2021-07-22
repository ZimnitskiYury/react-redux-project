import React from 'react';
import PropTypes from 'prop-types';

import styles from './brewersTips.css';


function Brewing({ brewersTips }) {
  return (
    <p className={styles['brewing__tips-title']}>{brewersTips}</p>
  );
}

Brewing.propTypes = {
  brewersTips: PropTypes.string.isRequired,
};

export default Brewing;
