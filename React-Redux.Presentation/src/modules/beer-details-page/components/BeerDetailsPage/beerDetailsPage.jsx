import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ToggleFavoriteButton from 'features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';
import { removeFavorite, addFavorite } from 'features/favorites/actions/favoritesActions';
import BeerProperties from 'modules/beer-details-page/components/BeerProperties/beerProperties';
import { getDataById } from 'services/beer-service/punkService';
import FoodPairing from 'modules/beer-details-page/components/FoodPairing/foodPairing';
import BrewersTips from 'modules/beer-details-page/components/BrewersTips/brewersTips';
import Ingredients from 'modules/beer-details-page/components/Ingredients/ingredients';
import Method from 'modules/beer-details-page/components/Method/method';
import Loader from 'common/components/Loader/loader';

import styles from './beerDetailsPage.css';


function BeerDetailsPageLayout({ beer, favHandler, isFavorite = false }) {
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
            isFavorite={isFavorite}
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

  if (!beer) {
    return (<Loader />);
  }

  return (
    <BeerDetailsPageLayout
      beer={beer}
      favHandler={favHandler}
      isFavorite={isFavorite()}
    />
  );
}

BeerDetailsPageLayout.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    ebc: PropTypes.number.isRequired,
    brewers_tips: PropTypes.string.isRequired,
    food_pairing: PropTypes.arrayOf(PropTypes.string).isRequired,
    image_url: PropTypes.string,
    method: PropTypes.shape(),
    ingredients: PropTypes.shape(),
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  favHandler: PropTypes.func.isRequired,
};

export default BeerDetailsPage;
