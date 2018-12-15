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

    return ids ? ids.map(id => byIdSelectors.getPost(state.byId, id)) : [];
  },
  getIsFetching: state =>
    listsByCategorySelectors.getIsFetching(state.listsByCategory),
};

export const Creators = {
  getAllPostsRequest: () => ({
    type: Types.ADD_POST_REQUEST,
  }),
  getAllPostsSuccess: data => ({
    type: Types.ADD_POST_SUCCESS,
    payload: { data },
  }),
  getAllPostsError: error => ({
    type: Types.ADD_POST_ERROR,
    payload: { error },
  }),
  retrievePostsRequest: category => ({
    type: Types.RETRIEVE_POSTS_REQUEST,
    payload: { category },
  }),
  retrievePostsSuccess: (response, category) => ({
    type: Types.RETRIEVE_POSTS_SUCCESS,
    payload: { response, category },
  }),
  retrievePostsError: error => ({
    type: Types.RETRIEVE_POSTS_ERROR,
    payload: { error },
  }),
};
