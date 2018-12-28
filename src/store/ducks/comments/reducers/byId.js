import Types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case Types.RETRIEVE_COMMENTS_SUCCESS:
    case Types.RETRIEVE_SINGLE_COMMENT_SUCCESS:
    case Types.VOTE_IN_COMMENT_SUCCESS:
    case Types.ADD_COMMENT_SUCCESS:
    case Types.EDIT_COMMENT_SUCCESS:
    case Types.DELETE_COMMENT_SUCCESS:
      return { ...state, ...action.payload.data.entities.comments };
    default:
      return state;
  }
};

export default byId;

export const Selectors = {
  getSingleComment: (state, id) => state[id],
};
