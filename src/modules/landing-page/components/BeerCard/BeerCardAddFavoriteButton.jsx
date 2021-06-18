import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../favorites-page/actions/favoritesActions';

const BeerCardAddFavoriteButton = ({ beer }) => {
  const store = useSelector((state) => state.favoritesStore.favorites);
  const dispatch = useDispatch();
  const isFavorite = store.filter((favorite) => favorite.id === beer.id).length;
  return (
    <button type="button" onClick={() => (isFavorite ? dispatch(removeFavorite(beer)) : dispatch(addFavorite(beer)))}>
      {isFavorite ? 'Remove ' : 'Add '}
      Favorite
    </button>
  );
};

export default BeerCardAddFavoriteButton;
