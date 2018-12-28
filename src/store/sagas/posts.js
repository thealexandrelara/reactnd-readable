import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import uuid from 'uuid';
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
    yield put(
      PostsActions.retrieveSinglePostError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
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

export function* addPost(action) {
  const { title, author, body, category } = action.payload;
  const params = {
    id: uuid.v4().replace(/-/g, ''),
    title,
    author,
    body,
    category,
    timestamp: Date.now(),
  };

  console.log('PARAMS: ', params);

  try {
    const response = yield call(api.post, '/posts', { ...params });
    console.log(normalize(response.data, post));

    yield put(
      PostsActions.addPostSuccess(normalize(response.data, post), category),
    );
  } catch (err) {
    yield put();
    // PostsActions.addPostError(
    //   'An error has occurred. Please, refresh the page.',
    // ),
  }
}

export function* editPost(action) {
  const { title, body, postId } = action.payload;
  const params = {
    title,
    body,
  };

  console.log('PARAMS: ', params);

  try {
    const response = yield call(api.put, `/posts/${postId}`, { ...params });
    console.log(normalize(response.data, post));

    yield put(PostsActions.editPostSuccess(normalize(response.data, post)));
  } catch (err) {
    yield put();
    // PostsActions.editPostError(
    //   'An error has occurred. Please, refresh the page.',
    // ),
  }
}

export function* deletePost(action) {
  const { postId } = action.payload;
  try {
    const response = yield call(api.delete, `/posts/${postId}`);
    console.log(normalize(response.data, post));

    yield put(PostsActions.deletePostSuccess(normalize(response.data, post)));
  } catch (err) {
    yield put();
    // PostsActions.deletePostError(
    //   'An error has occurred. Please, refresh the page.',
    // ),
  }
}
