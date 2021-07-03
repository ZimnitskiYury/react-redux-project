import { ADDBEERS, REQUESTBEERS } from 'Modules/landing-page/constants/searchBeersConstants';


const initialState = {
  beers: [],
};

function searchResultsReducer(
  state = initialState, action,
) {
  switch (action.type) {
    case REQUESTBEERS: return {
      ...state,
      beers: action.payload,
    };
    case ADDBEERS: return {
      ...state,
      beers: [
        ...state.beers,
        ...action.payload,
      ],
    };
    default: return state;
  }
}

export default searchResultsReducer;
