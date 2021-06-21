import { REQUESTBEERS } from 'Modules/landing-page/constants/searchBeersConstants';

export function initBeers() {
  return {
    type: REQUESTBEERS,
  };
}

export default { initBeers };
