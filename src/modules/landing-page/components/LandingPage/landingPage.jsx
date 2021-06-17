import React from 'react';
import SearchResults from '../SearchResults/searchResults';
import SearchBox from '../SearchBox/searchBox';
import styles from './landingPage.css';

const LandingPage = () => (
  <div className={styles['landing-page']}>
    <SearchBox />
    <SearchResults />
  </div>
);

export default LandingPage;
