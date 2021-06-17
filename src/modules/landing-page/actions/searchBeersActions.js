import { REQUESTBEERS } from '../constants/searchBeersConstants';

export function initBeers() {
  return {
    type: REQUESTBEERS,
  };
}
