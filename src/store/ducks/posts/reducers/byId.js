import Types from '../types';
import CommentsTypes from '../../comments/types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case Types.RETRIEVE_POSTS_SUCCESS:
    case Types.RETRIEVE_SINGLE_POST_SUCCESS:
    case Types.VOTE_IN_POST_SUCCESS:
    case Types.ADD_POST_SUCCESS:
    case Types.EDIT_POST_SUCCESS:
    case Types.DELETE_POST_SUCCESS:
      return { ...state, ...action.payload.data.entities.posts };
    case CommentsTypes.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        [action.payload.postId]: {
          ...state[action.payload.postId],
          commentCount: state[action.payload.postId].commentCount + 1,
        },
      };
    case CommentsTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        [action.payload.postId]: {
          ...state[action.payload.postId],
          commentCount: state[action.payload.postId].commentCount - 1,
        },
      };
    default:
      return state;
  }
};

export default byId;

export const Selectors = {
  getSinglePost: (state, id) => state[id],
};
