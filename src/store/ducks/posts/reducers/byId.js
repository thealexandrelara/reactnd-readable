import Types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case Types.RETRIEVE_POSTS_SUCCESS:
      return { ...state, ...action.payload.response.entities.posts };
    case Types.ADD_POST_SUCCESS:
      return {
        ...state,
        [action.payload.post.id]: action.payload.post,
      };
    default:
      return state;
  }
};

export default byId;

export const Selectors = {
  getPost: (state, id) => state[id],
};
