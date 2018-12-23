import { combineReducers } from 'redux';
import Types from '../types';

const listsByPostId = (state = {}, action) => {
  switch (action.type) {
    case Types.RETRIEVE_COMMENTS_SUCCESS:
      return {
        ...state,
        [action.payload.postId]: action.payload.data.result,
      };
    case Types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        [action.payload.postId]: [
          ...state[action.payload.postId],
          action.payload.data.result,
        ],
      };
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case Types.RETRIEVE_COMMENTS_ERROR:
    case Types.RETRIEVE_COMMENTS_SUCCESS:
      return false;
    case Types.RETRIEVE_COMMENTS_REQUEST:
      return true;
    default:
      return state;
  }
};

export default combineReducers({ ids: listsByPostId, isFetching });

// Selectors
export const Selectors = {
  getIds: (state, postId) => state.ids[postId],
  getIsFetching: state => state.isFetching,
};
