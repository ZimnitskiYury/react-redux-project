import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import BeerCard from 'Modules/landing-page/components/BeerCard/beerCard';
import { addFavorite, initFavorites, removeFavorite } from 'Features/favorites/actions/favoritesActions';

import useInfiniteLoader from 'Modules/landing-page/hooks/infiniteLoaderHook';
import styles from './searchResults.css';


function SearchResults({ searchParameters }) {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.searchResults.beers);
  const favorites = useSelector((state) => state.favoritesStore.favorites);

  useEffect(
    () => dispatch(initFavorites()),
    [],
  );

  const [containerRef] = useInfiniteLoader(
    {
      root: null,
      rootMargin: '-50px',
      threshold: 1.0,
    },
    beers,
    searchParameters,
  );

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
        Loading
      </div>
    </>
  );
}

SearchResults.propTypes = {
  searchParameters: PropTypes.shape({
    value: PropTypes.string,
    alcoValue: PropTypes.number,
    ibuValue: PropTypes.number,
    ebcValue: PropTypes.number,
  }),
};

SearchResults.defaultProps = {
  searchParameters: {},
};
export default SearchResults;
