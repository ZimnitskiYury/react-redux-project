import React from 'react';

import SearchResults from 'Modules/landing-page/components/SearchResults/searchResults';
import SearchBox from 'Modules/landing-page/components/SearchBox/searchBox';

import styles from './landingPage.css';

const LandingPage = () => (
  <div className={styles['landing-page']}>
    <SearchBox />
    <SearchResults />
  </div>
);

export default LandingPage;
