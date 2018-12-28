import { combineReducers } from 'redux';

import posts, { Selectors as PostsSelectors } from './posts';
import comments, { Selectors as CommentsSelectors } from './comments';
import categories from './categories';

export default combineReducers({ posts, comments, categories });

export const Selectors = {
  posts: {
    getVisiblePosts: (state, category, sortBy, orderBy, searchTerm) =>
      PostsSelectors.getVisiblePosts(
        state.posts,
        category,
        sortBy,
        orderBy,
        searchTerm,
      ),
    getSinglePost: (state, id) => PostsSelectors.getSinglePost(state.posts, id),
    getIsFetching: state => PostsSelectors.getIsFetching(state.posts),
  },
  comments: {
    getVisibleComments: (state, postId) =>
      CommentsSelectors.getVisibleComments(state.comments, postId),
  },
};
