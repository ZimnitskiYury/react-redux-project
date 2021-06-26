import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataById } from 'Services/connect';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import styles from './beerDetailsPage.css';


function BeerDetailsPage() {
  const [beer, setBeer] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await getDataById(id);

      setBeer(...result);
    };

    getData();
  }, []);

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
            <p className={styles['beer-page__header-description']}>
              {beer.description}
            </p>
          </div>
          <div className={styles['beer-page__header-photo']} style={{ backgroundImage: `url(${beer.image_url})` }} />
        </div>
        <div className={styles['beer-page__container']}>
          <div>
            <h2 className={styles['beer-page__container-header']}>Properties</h2>
            <ul className={styles['beer-page__properties']}>
              <li className={styles['beer-page__prop']}>
                <span className={styles['beer-page__prop-title']}>ABV</span>
                <InfoOutlinedIcon />
                <span className={styles['beer-page__prop-value']}>
                  {beer.abv}
                </span>
              </li>
              <li className={styles['beer-page__prop']}>
                <span className={styles['beer-page__prop-title']}>IBU</span>
                <InfoOutlinedIcon />
                <span className={styles['beer-page__prop-value']}>
                  {beer.ibu}
                </span>
              </li>
              <li className={styles['beer-page__prop']}>
                <span className={styles['beer-page__prop-title']}>EBC</span>
                <InfoOutlinedIcon />
                <span className={styles['beer-page__prop-value']}>
                  {beer.ebc}
                </span>
              </li>
            </ul>
          </div>
          <div>
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
          <div>
            <h2 className={styles['beer-page__container-header']}>Ingredients</h2>
            <ul className={styles['beer-page__ingredients']}>
              { Object.keys(beer.ingredients).map((element, index) => {
                if (Array.isArray(beer.ingredients[element])) {
                  return (
                    <li className={styles['beer-page__ingredients-cat']} key={index}>
                      <p>{element}</p>
                      <ul className={styles['beer-page__ingredients-cat-list']}>
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
          <div>
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
