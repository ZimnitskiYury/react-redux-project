import { REQUESTBEERS } from "../constants/SearchBeersConstants";

export function initBeers() {
  return {
    type: REQUESTBEERS,
  };
}
