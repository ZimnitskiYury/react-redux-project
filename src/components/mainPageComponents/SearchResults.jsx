import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initBeers } from '../../modules/search-beers/actions/SearchBeersActions';

import BeerCard from '../beerCardComponents/BeerCard';

const SearchResults = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const beers = useSelector((state) => state.searchResults.beers);
  if (!beers.length) {
    dispatch(initBeers());
  }
  return (
    <div>
      { beers.map((beer) => <BeerCard beer={beer} key={beer.name} />)}
    </div>
  );
};

export default SearchResults;
