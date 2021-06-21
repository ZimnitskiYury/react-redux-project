import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './searchBox.css';

const tag = 'searchBox';

function SearchBox() {
  return (
    <form action="/" method="get" className={styles['landing-page__search']}>
      <label htmlFor={tag}>
        Search:
        <input id={tag} type="text" name="searchQuery" placeholder="Search beers..." />
      </label>
      <SearchIcon />
    </form>
  );
}

export default SearchBox;
