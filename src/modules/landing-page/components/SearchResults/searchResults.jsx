import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initBeers } from 'Modules/landing-page/actions/searchBeersActions';
import BeerCard from 'Modules/landing-page/components/BeerCard/beerCard';

import styles from './searchResults.css';

function SearchResults() {
  const dispatch = useDispatch();
  // @ts-ignore
  const beers = useSelector((state) => state.searchResults.beers);
  if (!beers.length) {
    dispatch(initBeers());
  }
  return (
    <div className={styles['search-results']}>
      { beers.map((beer) => <BeerCard beer={beer} key={beer.name} />)}
    </div>
  );
};

export default SearchResults;
