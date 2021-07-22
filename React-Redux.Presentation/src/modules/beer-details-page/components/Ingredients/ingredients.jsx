import React from 'react';
import PropTypes from 'prop-types';

import ViewListIcon from '@material-ui/icons/ViewList';

import styles from './ingredients.css';


function Ingredients({ ingredients }) {
  return (
    <>
      <header className={styles.ingredients__header}>
        <ViewListIcon />
        Ingredients
      </header>
      <ul>
        <li className={styles.ingredients__category}>
          <p className={styles['ingredients__category-title']}>Malts</p>
          <MaltIngredients malts={ingredients.malt} />
        </li>
        <li className={styles.ingredients__category}>
          <p className={styles['ingredients__category-title']}>Hops</p>
          <HopsIngredients hops={ingredients.hops} />
        </li>
        <li className={styles.ingredients__category}>
          <p className={styles['ingredients__category-title']}>Yeast</p>
          <p className={styles['ingredients__category-values']}>{ingredients.yeast}</p>
        </li>
      </ul>
    </>
  );
}

function Malt({ malt }) {
  return (
    <li className={styles['ingredients__category-values']}>
      {`${malt.name} - ${malt.amount.value} ${malt.amount.unit}`}
    </li>
  );
}

function MaltIngredients({ malts }) {
  return (
    <ul>
      {malts.map((
        ing, index,
      ) => (
        <Malt
          malt={ing}
          key={index}
        />
      ))}
    </ul>
  );
}

function HopsIngredients({ hops }) {
  return (
    <ul>
      {hops.map((
        ing, index,
      ) => (
        <Hop
          key={index}
          hop={ing}
        />
      ))}
    </ul>
  );
}

function Hop({ hop }) {
  return (
    <li className={styles['ingredients__category-values']}>
      {`${hop.name} - ${hop.amount.value} ${hop.amount.unit} (add at the ${hop.add})`}
    </li>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.shape({
    malt: MaltIngredients.isRequired,
    hops: HopsIngredients.isRequired,
    yeast: PropTypes.string.isRequired,
  }).isRequired,
};

MaltIngredients.propTypes = {
  malts: PropTypes.arrayOf(Malt).isRequired,
};

Malt.propTypes = {
  malt: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
  }).isRequired,
};

HopsIngredients.propTypes = {
  hops: PropTypes.arrayOf(Hop).isRequired,
};

Hop.propTypes = {
  hop: PropTypes.shape({
    name: PropTypes.string,
    add: PropTypes.string,
    amount: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
  }).isRequired,
};

export default Ingredients;
