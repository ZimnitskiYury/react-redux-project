import { TOGGLE } from 'Layout/sidebar/constants/sidebarConstants';

const initialState = {

  isOpen: false,

};

function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE: return { ...state, isOpen: !(state.isOpen) };

    default: return state;
  }
}

export default sidebarReducer;
