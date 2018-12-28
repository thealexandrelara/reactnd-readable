import { combineReducers } from 'redux';
import Types from './types';
import byId, { Selectors as byIdSelectors } from './reducers/byId';
import listsByPostId, {
  Selectors as listsByPostIdSelectors,
} from './reducers/listsByPostId';

const posts = combineReducers({
  byId,
  listsByPostId,
});

export default posts;

export const Selectors = {
  getVisibleComments: (state, postId) => {
    const ids = listsByPostIdSelectors.getIds(state.listsByPostId, postId);

    return ids
      ? ids
          .map(id => byIdSelectors.getSingleComment(state.byId, id))
          .filter(comment => !comment.parentDeleted && !comment.deleted)
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      : [];
  },
  getSingleComment: (state, id) =>
    byIdSelectors.getSingleComment(state.byId, id),
  getIsFetching: state =>
    listsByPostIdSelectors.getIsFetching(state.listsByPostId),
};

export const Creators = {
  retrieveSingleCommentRequest: (id, postId) => ({
    type: Types.RETRIEVE_SINGLE_COMMENT_REQUEST,
    payload: { id, postId },
  }),
  retrieveSingleCommentSuccess: (data, postId) => ({
    type: Types.RETRIEVE_SINGLE_COMMENT_SUCCESS,
    payload: { data, postId },
  }),
  retrieveSingleCommentError: error => ({
    type: Types.RETRIEVE_SINGLE_COMMENT_ERROR,
    payload: { error },
  }),
  retrieveCommentsRequest: postId => ({
    type: Types.RETRIEVE_COMMENTS_REQUEST,
    payload: { postId },
  }),
  retrieveCommentsSuccess: (data, postId) => ({
    type: Types.RETRIEVE_COMMENTS_SUCCESS,
    payload: { data, postId },
  }),
  retrieveCommentsError: error => ({
    type: Types.RETRIEVE_COMMENTS_ERROR,
    payload: { error },
  }),
  voteInCommentRequest: (commentId, option) => ({
    type: Types.VOTE_IN_COMMENT_REQUEST,
    payload: { commentId, option },
  }),
  voteInCommentSuccess: (data, commentId) => ({
    type: Types.VOTE_IN_COMMENT_SUCCESS,
    payload: { data, commentId },
  }),
  voteInCommentError: error => ({
    type: Types.VOTE_IN_COMMENT_ERROR,
    payload: { error },
  }),
  addCommentRequest: (params, postId) => ({
    type: Types.ADD_COMMENT_REQUEST,
    payload: { ...params, parentId: postId },
  }),
  addCommentSuccess: (data, postId) => ({
    type: Types.ADD_COMMENT_SUCCESS,
    payload: { data, postId },
  }),
  addCommentError: error => ({
    type: Types.ADD_COMMENT_ERROR,
    payload: { error },
  }),
  editCommentRequest: (params, commentId, postId) => ({
    type: Types.EDIT_COMMENT_REQUEST,
    payload: { ...params, commentId, postId },
  }),
  editCommentSuccess: (data, postId) => ({
    type: Types.EDIT_COMMENT_SUCCESS,
    payload: { data, postId },
  }),
  editCommentError: error => ({
    type: Types.EDIT_COMMENT_ERROR,
    payload: { error },
  }),
  deleteCommentRequest: (commentId, postId) => ({
    type: Types.DELETE_COMMENT_REQUEST,
    payload: { commentId, postId },
  }),
  deleteCommentSuccess: (data, postId) => ({
    type: Types.DELETE_COMMENT_SUCCESS,
    payload: { data, postId },
  }),
  deleteCommentError: error => ({
    type: Types.DELETE_COMMENT_ERROR,
    payload: { error },
  }),
};
