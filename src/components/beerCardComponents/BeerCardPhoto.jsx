import React from 'react';
import PropTypes from 'prop-types';

const BeerCardPhoto = ({ imageUrl }) => (
  <div>
    <img src={imageUrl} alt={imageUrl} />
  </div>
);

BeerCardPhoto.propTypes = {
  imageUrl: PropTypes.string,
};
BeerCardPhoto.defaultProps = {
  imageUrl: undefined,
};

export default BeerCardPhoto;
