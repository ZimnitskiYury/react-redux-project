import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataById } from 'Services/connect';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ToggleFavoriteButton from 'Features/favorites/components/ToggleFavoriteButton/toggleFavoriteButton';
import { removeFavorite, addFavorite } from 'Features/favorites/actions/favoritesActions';
import styles from './beerDetailsPage.css';


function BeerDetailsPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesStore.favorites);

  const [beer, setBeer] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await getDataById(id);

      setBeer(...result);
    };

    getData();
  }, []);

  const isFavorite = function isFavorite() {
    if (favorites.filter((fav) => fav.id === beer.id).length) {
      return true;
    }
    return false;
  };

  const favHandler = () => {
    if (isFavorite(beer)) {
      return () => (dispatch(removeFavorite(beer)));
    } return () => (dispatch(addFavorite(beer)));
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
            <ToggleFavoriteButton isFavorite={isFavorite()} handler={favHandler()} />
            <p className={styles['beer-page__header-description']}>
              {beer.description}
            </p>
          </div>
          <div className={styles['beer-page__header-photo']} style={{ backgroundImage: `url(${beer.image_url})` }} />
        </div>
        <div className={styles['beer-page__container']}>
          <div className={styles['beer-page__container_half']}>
            <h2 className={styles['beer-page__container-header']}>Properties</h2>
            <ul className={styles['beer-page__properties']}>
              <li className={styles['beer-page__prop']}>
                <span className={styles['beer-page__prop-title']}>ABV</span>
                <div className={styles['beer-page__prop-info-tooltip']}>
                  <InfoOutlinedIcon />
                  <p>
                    ABV, or alcohol by volume,
                    is the standard measurement,
                    used worldwide, to assess the
                    strength of a particular beer.
                  </p>
                </div>
                <span className={styles['beer-page__prop-value']}>
                  {beer.abv}
                </span>
              </li>
              <li className={styles['beer-page__prop']}>
                <span className={styles['beer-page__prop-title']}>IBU</span>
                <div className={styles['beer-page__prop-info-tooltip']}>
                  <InfoOutlinedIcon />
                  <p>
                    IBU, or international bittering unit,
                    measures the bitterness levels in beer
                    (based on the amount of hops added).
                  </p>
                </div>
                <span className={styles['beer-page__prop-value']}>
                  {beer.ibu}
                </span>
              </li>
              <li className={styles['beer-page__prop']}>
                <span className={styles['beer-page__prop-title']}>EBC</span>
                <div className={styles['beer-page__prop-info-tooltip']}>
                  <InfoOutlinedIcon />
                  <p>
                    Color Units Ebc
                    (European Brewery Convention)
                    refer to the color of a beer measured
                    in a technical manner.
                  </p>
                </div>
                <span className={styles['beer-page__prop-value']}>
                  {beer.ebc}
                </span>
              </li>
            </ul>
          </div>
          <div className={styles['beer-page__container_half']}>
            <h2 className={styles['beer-page__container-header']}>Food Pairing</h2>
            <ul className={styles['beer-page__food-pairing']}>
              {beer.food_pairing.map((element, index) => (<li className={styles['beer-page__food']} key={index}>{element}</li>))}
            </ul>
          </div>
        </div>
        <div className={styles['beer-page__brewing']}>
          <p>{beer.brewers_tips}</p>
        </div>
        <div className={styles['beer-page__container']}>
          <div className={styles['beer-page__container_half']}>
            <h2 className={styles['beer-page__container-header']}>Ingredients</h2>
            <ul className={styles['beer-page__ingredients']}>
              { Object.keys(beer.ingredients).map((element, index) => {
                if (Array.isArray(beer.ingredients[element])) {
                  return (
                    <li className={styles['beer-page__ingredients-cat']} key={index}>
                      <p>{element}</p>
                      <ul>
                        {beer.ingredients[element].map((ing, ind) => (<li className={styles['beer-page__ingredients-cat-item']} key={ind}>{`${ing.name} - ${ing.amount.value} ${ing.amount.unit}`}</li>))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li className={styles['beer-page__ingredients-cat']} key={index}>
                    {element}
                    <p>{beer.ingredients[element]}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles['beer-page__container_half']}>
            <h2 className={styles['beer-page__container-header']}>Method</h2>
            <ul className={styles['beer-page__method']}>
              <li className={styles['beer-page__method-prop']}>
                <span className={styles['beer-page__method-prop-title']}>Fermentation</span>
                <p>
                  {`Perform at ${beer.method.fermentation.temp.value} °C`}
                </p>
              </li>
              <li className={styles['beer-page__method-prop']}>
                <span className={styles['beer-page__method-prop-title']}>Mash</span>
                {beer.method.mash_temp.map((element, index) => (
                  <p key={index}>{`${element.duration} minutes at ${element.temp.value} °C`}</p>
                ))}
              </li>
              <li className={styles['beer-page__method-prop']}>
                <span className={styles['beer-page__method-prop-title']}>Twist</span>
                <p>
                  {(beer.method.twist) ? beer.method.twist : 'Without twist'}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return (<h1>loading</h1>);
}

export default BeerDetailsPage;
