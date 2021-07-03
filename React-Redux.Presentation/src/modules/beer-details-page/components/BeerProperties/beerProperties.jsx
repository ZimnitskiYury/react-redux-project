import React from 'react';
import PropTypes from 'prop-types';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import styles from './beerProperties.css';


const tooltip = {
  ebc: 'Color Units Ebc (European Brewery Convention) refer to the color of a beer measured in a technical manner.',
  abv: 'ABV, or alcohol by volume, is the standard measurement, used worldwide, to assess the strength of a particular beer.',
  ibu: 'IBU, or international bittering unit, measures the bitterness levels in beer (based on the amount of hops added).',
};

function BeerProperties({ abv, ibu, ebc }) {
  return (
    <>
      <header className={styles.properties__header}>
        <LocalDrinkIcon />
        Properties
      </header>
      <ul className={styles.properties}>
        <BeerProperty
          title="ABV"
          tooltipValue={tooltip.abv}
          value={abv}
        />
        <BeerProperty
          title="IBU"
          tooltipValue={tooltip.ibu}
          value={ibu}
        />
        <BeerProperty
          title="EBC"
          tooltipValue={tooltip.ebc}
          value={ebc}
        />
      </ul>
    </>
  );
}

function BeerProperty({ title, tooltipValue, value }) {
  return (
    <li
      className={styles.properties__prop}
      key={title}
    >
      <span className={styles['properties__prop-title']}>{title}</span>
      <div className={styles['properties__prop-info-tooltip']}>
        <InfoOutlinedIcon />
        <p>
          {tooltipValue}
        </p>
      </div>
      <span className={styles['properties__prop-value']}>
        {value}
      </span>
    </li>
  );
}

BeerProperties.propTypes = {
  abv: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
};

BeerProperty.propTypes = {
  title: PropTypes.string.isRequired,
  tooltipValue: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default BeerProperties;
