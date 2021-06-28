import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BeerCard from 'Modules/landing-page/components/BeerCard/beerCard';
import { addFavorite, removeFavorite } from 'Features/favorites/actions/favoritesActions';

import useInfiniteLoader from 'Modules/landing-page/hooks/infiniteLoaderHook';
import styles from './searchResults.css';


function SearchResults() {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.searchResults.beers);
  const favorites = useSelector((state) => state.favoritesStore.favorites);
  const [
    containerRef,
    page,
  ] = useInfiniteLoader({
    root: null,
    rootMargin: '-20px',
    threshold: 1.0,
  });

  const isFavorite = function isFavorite(beer) {
    if (favorites.filter((fav) => fav.id === beer.id).length) {
      return true;
    }

    return false;
  };
  const favHandler = (beer) => {
    if (isFavorite(beer)) {
      return () => (dispatch(removeFavorite(beer)));
    }

    return () => (dispatch(addFavorite(beer)));
  };

  return (
    <>
      <div className={styles['search-results']}>
        { beers.map((beer) => (
          <BeerCard
            id={beer.id}
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            imageUrl={beer.image_url}
            isFavorite={isFavorite(beer)}
            handler={favHandler(beer)}
          />
        ))}
      </div>
      <div ref={containerRef}>
        {`Loading ${page}`}
      </div>
    </>
  );
}

export default SearchResults;
