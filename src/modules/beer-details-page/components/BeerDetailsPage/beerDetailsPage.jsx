import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ToggleFavoriteButton from 'Features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';
import { removeFavorite, addFavorite } from 'Features/favorites/actions/favoritesActions';
import BeerProperties from 'Modules/beer-details-page/components/BeerProperties/beerProperties';
import { getDataById } from 'Services/punkService';
import FoodPairing from 'Modules/beer-details-page/components/FoodPairing/foodPairing';
import BrewersTips from 'Modules/beer-details-page/components/BrewersTips/brewersTips';
import Ingredients from 'Modules/beer-details-page/components/Ingredients/ingredients';

import styles from './beerDetailsPage.css';
import Method from '../Method/method';


function BeerDetailsPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesStore.favorites);

  const [
    beer,
    setBeer,
  ] = useState();
  const { id } = useParams();

  useEffect(
    () => {
      const getData = async () => {
        const result = await getDataById(id);

        setBeer(...result);
      };

      getData();
    },
    [],
  );

  const isFavorite = function isFavorite() {
    if (favorites.filter((fav) => fav.id === beer.id).length) {
      return true;
    }

    return false;
  };

  const favHandler = () => {
    if (isFavorite(beer)) {
      return () => (dispatch(removeFavorite(beer)));
    }

    return () => (dispatch(addFavorite(beer)));
  };

  if (beer) {
    return (
      <div className={styles['beer-page']}>
        <div className={styles['beer-page__header']}>
          <div className={styles['beer-page__header-info']}>
            <h1 className={styles['beer-page__header-title']}>
              {beer.name}
            </h1>
            <span className={styles['beer-page__header-tags']}>
              {beer.tagline}
            </span>
            <ToggleFavoriteButton
              isFavorite={isFavorite()}
              handler={favHandler()}
            />
            <p className={styles['beer-page__header-description']}>
              {beer.description}
            </p>
            <div className={styles['beer-page__container']}>
              <div className={styles['beer-page__container_half']}>
                <BeerProperties
                  abv={beer.abv}
                  ibu={beer.ibu}
                  ebc={beer.ebc}
                />
              </div>
              <div className={styles['beer-page__container_half']}>
                <FoodPairing foodPairing={beer.food_pairing} />
              </div>
            </div>
          </div>
          <img
            className={styles['beer-page__header-photo']}
            src={beer.image_url}
            alt="Beer"
          />
        </div>
        <BrewersTips brewersTips={beer.brewers_tips} />
        <div className={styles['beer-page__container']}>
          <div className={styles['beer-page__container_half']}>
            <Ingredients ingredients={beer.ingredients} />
          </div>
          <div className={styles['beer-page__container_half']}>
            <Method method={beer.method} />
          </div>
        </div>
      </div>
    );
  }

  return (<h1>loading</h1>);
}

export default BeerDetailsPage;
