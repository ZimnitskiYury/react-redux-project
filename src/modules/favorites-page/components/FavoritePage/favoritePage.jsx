import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteBeer from 'Modules/favorites-page/components/FavoriteBeer/favoriteBeer';
import styles from './favoritePage.css';

function FavoritePage() {
  const beers = useSelector((state) => state.favoritesStore.favorites);

  return (
    <>
      <h1 className={styles['favorite-page']}>Favorite Beer</h1>
      <div className={styles['favorite-page__list']}>
        { beers.map((beer) => <FavoriteBeer beer={beer} key={beer.name} />)}
      </div>
    </>
  );
}

export default FavoritePage;
