import { combineReducers } from 'redux';
import Types from '../types';

const listsByCategory = (state = { all: [] }, action) => {
  switch (action.type) {
    case Types.RETRIEVE_POSTS_SUCCESS:
      return {
        ...state,
        [action.payload.category]: action.payload.data.result,
      };
    case Types.ADD_POST_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload.data.result],
        [action.payload.category]: [
          ...(state[action.payload.category]
            ? state[action.payload.category]
            : []),
          action.payload.data.result,
        ],
      };
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  console.log('ISFETCHING');
  switch (action.type) {
    case Types.RETRIEVE_POSTS_ERROR:
    case Types.RETRIEVE_POSTS_SUCCESS:
      return false;
    case Types.RETRIEVE_POSTS_REQUEST:
      return true;
    default:
      return state;
  }
};

export default combineReducers({ ids: listsByCategory, isFetching });

// Selectors
export const Selectors = {
  getIds: (state, category) => state.ids[category],
  getIsFetching: state => state.isFetching,
};
