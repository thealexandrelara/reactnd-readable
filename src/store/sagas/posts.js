import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../services/api';

import { post } from '../ducks/posts/schema';
import { Creators as PostsActions } from '../ducks/posts';

export function* retrievePosts(action) {
  const { category } = action.payload;

  try {
    const response = yield call(
      api.get,
      category === 'all' ? '/posts' : `/${category}/posts`,
    );
    console.log(normalize(response.data, [post]));

    yield put(
      PostsActions.retrievePostsSuccess(
        normalize(response.data, [post]),
        category,
      ),
    );
  } catch (err) {
    yield put();
    // PostsActions.retrievePostsError(
    //   'An error has occurred. Please, refresh the page.',
    // ),
  }
}

export function* retrieveSinglePost(action) {
  const { id, category } = action.payload;

  try {
    const response = yield call(api.get, `/posts/${id}`);
    console.log(normalize(response.data, post));

    yield put(
      PostsActions.retrieveSinglePostSuccess(
        normalize(response.data, post),
        category,
      ),
    );
  } catch (err) {
    yield put();
    // PostsActions.retrieveSinglePostError(
    //   'An error has occurred. Please, refresh the page.',
    // ),
  }
}

export function* voteInPost(action) {
  const { postId, option } = action.payload;

  try {
    const response = yield call(api.post, `/posts/${postId}`, { option });
    console.log(normalize(response.data, post));

    yield put(
      PostsActions.voteInPostSuccess(normalize(response.data, post), postId),
    );
  } catch (err) {
    yield put();
    // PostsActions.retrieveSinglePostError(
    //   'An error has occurred. Please, refresh the page.',
    // ),
  }
}
