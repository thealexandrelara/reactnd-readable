import { combineReducers } from 'redux';

import posts, { Selectors as PostsSelectors } from './posts';
import categories from './categories';

export default combineReducers({ posts, categories });

export const Selectors = {
  posts: {
    getVisiblePosts: (state, category) =>
      PostsSelectors.getVisiblePosts(state.posts, category),
    getIsFetching: state => PostsSelectors.getIsFetching(state.posts),
  },
};
