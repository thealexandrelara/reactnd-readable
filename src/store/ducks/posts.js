export const Types = {
  GET_ALL_POSTS_REQUEST: 'posts/GET_ALL_POSTS_REQUEST',
  GET_ALL_POSTS_SUCCESS: 'posts/GET_ALL_POSTS_SUCCESS',
  GET_ALL_POSTS_ERROR: 'posts/GET_ALL_POSTS_ERROR',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_POSTS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_ALL_POSTS_SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.GET_ALL_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getAllPostsRequest: () => ({
    type: Types.GET_ALL_POSTS_REQUEST,
  }),
  getAllPostsSuccess: data => ({
    type: Types.GET_ALL_POSTS_SUCCESS,
    payload: { data },
  }),
  getAllPostsError: error => ({
    type: Types.GET_ALL_POSTS_ERROR,
    payload: { error },
  }),
};
