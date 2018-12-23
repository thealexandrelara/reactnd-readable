import Types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case Types.RETRIEVE_POSTS_SUCCESS:
    case Types.RETRIEVE_SINGLE_POST_SUCCESS:
    case Types.VOTE_IN_POST_SUCCESS:
      return { ...state, ...action.payload.data.entities.posts };
    default:
      return state;
  }
};

export default byId;

export const Selectors = {
  getSinglePost: (state, id) => state[id],
};
