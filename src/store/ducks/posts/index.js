import { combineReducers } from 'redux';
import Types from './types';
import byId, { Selectors as byIdSelectors } from './reducers/byId';
import listsByCategory, {
  Selectors as listsByCategorySelectors,
} from './reducers/listsByCategory';

const posts = combineReducers({
  byId,
  listsByCategory,
});

export default posts;

export const Selectors = {
  getVisiblePosts: (state, category) => {
    const ids = listsByCategorySelectors.getIds(
      state.listsByCategory,
      category,
    );

    return ids
      ? ids
          .map(id => byIdSelectors.getSinglePost(state.byId, id))
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      : [];
  },
  getSinglePost: (state, id) => byIdSelectors.getSinglePost(state.byId, id),
  getIsFetching: state =>
    listsByCategorySelectors.getIsFetching(state.listsByCategory),
};

export const Creators = {
  retrieveSinglePostRequest: (id, category) => ({
    type: Types.RETRIEVE_SINGLE_POST_REQUEST,
    payload: { id, category },
  }),
  retrieveSinglePostSuccess: (data, category) => ({
    type: Types.RETRIEVE_SINGLE_POST_SUCCESS,
    payload: { data, category },
  }),
  retrieveSinglePostError: error => ({
    type: Types.RETRIEVE_SINGLE_POST_ERROR,
    payload: { error },
  }),
  retrievePostsRequest: category => ({
    type: Types.RETRIEVE_POSTS_REQUEST,
    payload: { category },
  }),
  retrievePostsSuccess: (data, category) => ({
    type: Types.RETRIEVE_POSTS_SUCCESS,
    payload: { data, category },
  }),
  retrievePostsError: error => ({
    type: Types.RETRIEVE_POSTS_ERROR,
    payload: { error },
  }),
  voteInPostRequest: (postId, option) => ({
    type: Types.VOTE_IN_POST_REQUEST,
    payload: { postId, option },
  }),
  voteInPostSuccess: (data, postId) => ({
    type: Types.VOTE_IN_POST_SUCCESS,
    payload: { data, postId },
  }),
  voteInPostError: error => ({
    type: Types.VOTE_IN_POST_ERROR,
    payload: { error },
  }),
};
