import React from 'react';
import styles from './searchResults.css';
import { useDispatch, useSelector } from 'react-redux';
import BeerCard from '../BeerCard/beerCard';
import { initBeers } from '/src/modules/landing-page/actions/searchBeersActions';

const SearchResults = () => {
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
