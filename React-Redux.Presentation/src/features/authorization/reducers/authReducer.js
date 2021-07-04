import { AUTH_SUCCESS, LOGOUT } from '../constants/authConstants';


const initialState = {
  user: {},
  isLogged: false,
};

function authReducer(
  state = initialState, action,
) {
  switch (action.type) {
    case AUTH_SUCCESS: return {
      ...state,
      user: action.user,
    };

    case LOGOUT: return {
      ...state,
      user: {},
      isLogged: false,
    };
    default: return state;
  }
}

export default authReducer;
