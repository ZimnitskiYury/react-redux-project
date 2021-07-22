import React, { useState } from 'react';

import SearchResults from 'Modules/landing-page/components/SearchResults/searchResults';
import SearchBox from 'Modules/landing-page/components/SearchBox/searchBox';

import styles from './landingPage.css';


function LandingPage() {
  const [
    searchParameters,
    setSearchParameters,
  ] = useState();

  return (
    <div className={styles['landing-page']}>
      <SearchBox setSearchParameters={setSearchParameters} />
      <SearchResults searchParameters={searchParameters} />
    </div>
  );
}

export default LandingPage;
