import { ADD_FAVORITE, REMOVE_FAVORITE } from 'Features/favorites/constants/favoritesConstants';


const initialState = {
  favorites: [],
};

function favoritesReducer(
  state = initialState, action,
) {
  switch (action.type) {
    // payload == beer
    case ADD_FAVORITE: return {
      ...state,
      favorites: [
        ...state.favorites,
        action.payload,
      ],
    };
    // eslint-disable-next-line max-len
    case REMOVE_FAVORITE: return {
      ...state,
      favorites: state.favorites.filter((beer) => beer.id !== action.payload.id),
    };
    default: return state;
  }
}

export default favoritesReducer;
