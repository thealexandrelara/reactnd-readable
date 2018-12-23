import { all, takeLatest } from 'redux-saga/effects';

import PostsTypes from '../ducks/posts/types';
import { retrievePosts, retrieveSinglePost, voteInPost } from './posts';

import CommentsTypes from '../ducks/comments/types';
import { retrieveComments, voteInComment, addComment } from './comments';

import { Types as CategoriesTypes } from '../ducks/categories';
import { retrieveCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(PostsTypes.RETRIEVE_POSTS_REQUEST, retrievePosts),
    takeLatest(PostsTypes.RETRIEVE_SINGLE_POST_REQUEST, retrieveSinglePost),
    takeLatest(PostsTypes.VOTE_IN_POST_REQUEST, voteInPost),

    takeLatest(CommentsTypes.RETRIEVE_COMMENTS_REQUEST, retrieveComments),
    takeLatest(CommentsTypes.VOTE_IN_COMMENT_REQUEST, voteInComment),
    takeLatest(CommentsTypes.ADD_COMMENT_REQUEST, addComment),

    takeLatest(CategoriesTypes.RETRIEVE_CATEGORIES_REQUEST, retrieveCategories),
  ]);
}
