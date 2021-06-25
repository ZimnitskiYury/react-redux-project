import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataById } from 'Services/connect';
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
          <ul className={styles['beer-page__properties']}>
            <li />
            <li />
          </ul>
          <ul className={styles['beer-page__food-pairing']}>
            <li />
            <li />
          </ul>
        </div>
        <div className={styles['beer-page__brewing']} />
        <div className={styles['beer-page__container']}>
          <ul className={styles['beer-page__ingredients']}>
            <li />
            <li />
          </ul>
          <ul className={styles['beer-page__method']}>
            <li />
            <li />
          </ul>
        </div>
      </div>
    );
  }
  return (<h1>loading</h1>);
}

export default BeerDetailsPage;
