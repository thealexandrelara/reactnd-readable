import { all, takeLatest } from 'redux-saga/effects';

import PostsTypes from '../ducks/posts/types';
import { retrievePosts } from './posts';

import { Types as CategoriesTypes } from '../ducks/categories';
import { retrieveCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(PostsTypes.RETRIEVE_POSTS_REQUEST, retrievePosts),
    takeLatest(CategoriesTypes.RETRIEVE_CATEGORIES_REQUEST, retrieveCategories),
  ]);
}
