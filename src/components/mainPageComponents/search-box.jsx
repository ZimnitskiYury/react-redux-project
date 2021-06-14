import React from 'react';

const tag = 'searchBox';

const SearchBox = () => (
  <form action="/" method="get">
    <label htmlFor={tag}>
      Search:
      <input id={tag} type="text" name="searchQuery" placeholder="Search bears..." />
    </label>
    <button type="submit">Search</button>
  </form>
);

export default SearchBox;
