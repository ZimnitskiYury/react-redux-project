import { CLEAR_FAVORITE, UPDATE_FAVORITES } from 'features/favorites/constants/favoritesConstants';


const initialState = {
  favorites: [],
};

function favoritesReducer(
  state = initialState, action,
) {
  switch (action.type) {
    case UPDATE_FAVORITES: return {
      ...state,
      favorites: action.payload,
    };
    case CLEAR_FAVORITE: return {
      ...state,
      favorites: [],
    };
    default: return state;
  }
}

export default favoritesReducer;
