

import { LOADMORE, SEARCHBEERS } from 'Modules/landing-page/constants/searchBeersConstants';


export function loadMoreBeers(
  name, alcohol, ibu, ebc, pageNumber,
) {
  const payload = new Map();

  if (pageNumber) {
    payload.set(
      'page',
      pageNumber,
    );
  }

  if (name) {
    payload.set(
      'beer_name',
      name,
    );
  }

  if (alcohol) {
    payload.set(
      'abv_lt',
      alcohol,
    );
  }

  if (ibu) {
    payload.set(
      'ibu_lt',
      ibu,
    );
  }

  if (ebc) {
    payload.set(
      'ebc_lt',
      ebc,
    );
  }

  return {
    type: LOADMORE,
    payload,
  };
}

export function searchBeers(
  name, alcohol, ibu, ebc,
) {
  const payload = new Map();

  if (name) {
    payload.set(
      'beer_name',
      name,
    );
  }

  if (alcohol) {
    payload.set(
      'abv_lt',
      alcohol,
    );
  }

  if (ibu) {
    payload.set(
      'ibu_lt',
      ibu,
    );
  }

  if (ebc) {
    payload.set(
      'ebc_lt',
      ebc,
    );
  }

  return {
    type: SEARCHBEERS,
    payload,
  };
}

export default {
  searchBeers,
  loadMoreBeers,
};
