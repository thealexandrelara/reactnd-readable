import { combineReducers } from 'redux';
import _ from 'lodash';
import Types from './types';
import byId, { Selectors as byIdSelectors } from './reducers/byId';
import listsByCategory, {
  Selectors as listsByCategorySelectors,
} from './reducers/listsByCategory';
import { searchPosts } from '../../../utils/posts';

const posts = combineReducers({
  byId,
  listsByCategory,
});

export default posts;

export const Selectors = {
  getVisiblePosts: (state, category, sortBy, orderBy, searchTerm) => {
    const ids = listsByCategorySelectors.getIds(
      state.listsByCategory,
      category,
    );

    let postsList = ids
      ? ids.map(id => byIdSelectors.getSinglePost(state.byId, id))
      : [];

    if (sortBy && orderBy) {
      postsList = _.orderBy(postsList, [sortBy], [orderBy]);
    }

    postsList = postsList.filter(post => !post.deleted);

    if (searchTerm) {
      postsList = searchPosts(postsList, searchTerm);
    }

    return postsList;
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
  addPostRequest: params => ({
    type: Types.ADD_POST_REQUEST,
    payload: { ...params },
  }),
  addPostSuccess: (data, category) => ({
    type: Types.ADD_POST_SUCCESS,
    payload: { data, category },
  }),
  addPostError: error => ({
    type: Types.ADD_POST_ERROR,
    payload: { error },
  }),
  editPostRequest: (params, postId) => ({
    type: Types.EDIT_POST_REQUEST,
    payload: { ...params, postId },
  }),
  editPostSuccess: (data, category) => ({
    type: Types.EDIT_POST_SUCCESS,
    payload: { data, category },
  }),
  editPostError: error => ({
    type: Types.EDIT_POST_ERROR,
    payload: { error },
  }),
  deletePostRequest: postId => ({
    type: Types.DELETE_POST_REQUEST,
    payload: { postId },
  }),
  deletePostSuccess: data => ({
    type: Types.DELETE_POST_SUCCESS,
    payload: { data },
  }),
  deletePostError: error => ({
    type: Types.DELETE_POST_ERROR,
    payload: { error },
  }),
};
