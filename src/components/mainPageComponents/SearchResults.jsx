import React from 'react';
import PropTypes from 'prop-types';
import BeerCard from '../beerCardComponents/BeerCard';

const test = [{
  name: 'beeeeeeer',
  imageUrl: 'https://images.punkapi.com/v2/192.png',
  tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
}];
const SearchResults = () => (
  <div>
    Search Results
    { test.map((beer) => <BeerCard beer={beer} key={beer.name}/>)}
  </div>
);

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape),
};

SearchResults.defaultProps = {
  searchResults: [],
};

export default SearchResults;
