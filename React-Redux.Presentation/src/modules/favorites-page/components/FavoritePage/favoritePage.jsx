import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FavoriteBeer from 'Modules/favorites-page/components/FavoriteBeer/favoriteBeer';
import { initFavorites, removeFavorite } from 'Features/favorites/actions/favoritesActions';

import styles from './favoritePage.css';


function FavoritePage() {
  const beers = useSelector((state) => state.favoritesStore.favorites);
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(initFavorites()),
    [],
  );

  const removeFavoriteHandler = (beer) => {
    dispatch(removeFavorite(beer));
  };

  return (
    <>
      <h1 className={styles['favorite-page']}>Favorite Beer</h1>
      <div className={styles['favorite-page__list']}>
        { beers.map((beer) => (
          <FavoriteBeer
            name={beer.name}
            key={beer.name}
            description={beer.description}
            tagline={beer.tagline}
            imageUrl={beer.image_url}
            removeFavoriteHandler={() => removeFavoriteHandler(beer)}
          />
        ))}
      </div>
    </>
  );
}

export default FavoritePage;
