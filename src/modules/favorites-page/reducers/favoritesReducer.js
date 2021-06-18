import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/favoritesConstants';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    // payload == beer
    case ADD_FAVORITE: return { ...state, favorites: [...state.favorites, action.payload] };
    // eslint-disable-next-line max-len
    case REMOVE_FAVORITE: return { ...state, favorites: state.favorites.filter((beer) => beer !== action.payload) };
    default: return state;
  }
};

export default favoritesReducer;
