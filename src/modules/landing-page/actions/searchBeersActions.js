import { INITIAL, SEARCHBEERS } from 'Modules/landing-page/constants/searchBeersConstants';


export function initBeers() {
  return {
    type: INITIAL,
  };
}

export function searchBeers(name, alcohol, ibu, ebc) {
  return {
    type: SEARCHBEERS,
    payload: new Map([
      ['beer_name', name],
      ['abv_gt', (alcohol) - 1],
      ['abv_lt', (alcohol) + 1],
      ['ibu_gt', (ibu) - 1],
      ['ibu_lt', (ibu) + 1],
      ['ebc_gt', (ebc) - 1],
      ['ebc_lt', (ebc) + 1],
    ]),
  };
}

export default { initBeers, searchBeers };
