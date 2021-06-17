import { INITIAL } from "../constants/SearchBeersConstants";

const initialState = {
  beers: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL: return { ...state, beers: action.payload };
    default: return state;
  }
};

export default searchResultsReducer;
