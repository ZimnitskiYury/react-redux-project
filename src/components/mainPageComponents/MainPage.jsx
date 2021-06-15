import React from 'react';
import SearchBox from './search-box';
import styles from './mainPage.css';
import SearchResults from './SearchResults';

const MainPage = () => (
  <div className={styles['main-page']}>
    MainPage
    <SearchBox />
    <SearchResults />
  </div>
);

export default MainPage;
