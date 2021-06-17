import { TOGGLE } from '/src/modules/sidebar/constants/sidebarConstants';

const initialState = {
  isOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: return { ...state, isOpen: !(state.isOpen) };
    default: return state;
  }
};

export default sidebarReducer;
