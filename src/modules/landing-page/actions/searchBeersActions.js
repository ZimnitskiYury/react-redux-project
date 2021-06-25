import { INITIAL, SEARCHBEERS } from 'Modules/landing-page/constants/searchBeersConstants';


export function initBeers() {
  return {
    type: INITIAL,
  };
}

export function searchBeers(name, alcohol, ibu, ebc) {
  const payload = new Map();
  payload.set('beer_name', name);
  if (alcohol) {
    payload.set('abv_gt', (alcohol) - 1)
      .set('abv_lt', (alcohol) + 1);
  }
  if (ibu) {
    payload.set('ibu_gt', (ibu) - 1)
      .set('ibu_lt', (ibu) + 1);
  }
  if (ebc) {
    payload.set('ebc_gt', (ebc) - 1)
      .set('ebc_lt', (ebc) + 1);
  }
  return {
    type: SEARCHBEERS,
    payload,
  };
}

export default { initBeers, searchBeers };
