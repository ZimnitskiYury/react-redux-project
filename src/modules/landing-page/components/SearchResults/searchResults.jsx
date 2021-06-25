import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initBeers } from 'Modules/landing-page/actions/searchBeersActions';
import BeerCard from 'Modules/landing-page/components/BeerCard/beerCard';
import { addFavorite, removeFavorite } from 'Features/favorites/actions/favoritesActions';

import styles from './searchResults.css';


function SearchResults() {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.searchResults.beers);
  const favorites = useSelector((state) => state.favoritesStore.favorites);

  const isFavorite = function isFavorite(beer) {
    if (favorites.filter((fav) => fav.id === beer.id).length) {
      return true;
    }
    return false;
  };
  const favHandler = (beer) => {
    if (isFavorite(beer)) {
      dispatch(removeFavorite(beer));
    } else { dispatch(addFavorite(beer)); }
  };

  if (!beers.length) {
    dispatch(initBeers());
  }
  return (
    <div className={styles['search-results']}>
      { beers.map((beer) => (
        <BeerCard
          id={beer.id}
          key={beer.name}
          name={beer.name}
          tagline={beer.tagline}
          imageUrl={beer.image_url}
          isFavorite={isFavorite(beer)}
          handler={() => favHandler(beer)}
        />
      ))}
    </div>
  );
}

export default SearchResults;
