import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import uuid from 'uuid';
import api from '../../services/api';

import { comment } from '../ducks/comments/schema';
import { Creators as CommentsActions } from '../ducks/comments';

export function* retrieveComments(action) {
  const { postId } = action.payload;

  try {
    const response = yield call(api.get, `/posts/${postId}/comments`);
    console.log(response.data);
    console.log(normalize(response.data, [comment]));

    yield put(
      CommentsActions.retrieveCommentsSuccess(
        normalize(response.data, [comment]),
        postId,
      ),
    );
  } catch (err) {
    yield put(
      CommentsActions.retrieveCommentsError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}

export function* voteInComment(action) {
  const { commentId, option } = action.payload;

  try {
    const response = yield call(api.post, `/comments/${commentId}`, { option });
    console.log(response.data);
    console.log(normalize(response.data, comment));

    yield put(
      CommentsActions.voteInCommentSuccess(
        normalize(response.data, comment),
        commentId,
      ),
    );
  } catch (err) {
    yield put(
      CommentsActions.voteInCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}

export function* addComment(action) {
  const { author, body, parentId } = action.payload;
  const params = {
    id: uuid.v4().replace(/-/g, ''),
    author,
    body,
    parentId,
    timestamp: Date.now(),
  };

  console.log('PARAMS: ', params);

  try {
    const response = yield call(api.post, '/comments', { ...params });
    console.log(normalize(response.data, comment));

    yield put(
      CommentsActions.addCommentSuccess(
        normalize(response.data, comment),
        parentId,
      ),
    );
  } catch (err) {
    yield put(
      CommentsActions.addCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}

export function* editComment(action) {
  const { body, commentId, postId } = action.payload;
  const params = {
    body,
    timestamp: Date.now(),
  };

  console.log('PARAMS: ', params);

  try {
    const response = yield call(api.put, `/comments/${commentId}`, {
      ...params,
    });
    console.log(normalize(response.data, comment), postId);

    yield put(
      CommentsActions.editCommentSuccess(
        normalize(response.data, comment),
        postId,
      ),
    );
  } catch (err) {
    yield put(
      CommentsActions.editCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}

export function* deleteComment(action) {
  const { commentId, postId } = action.payload;

  try {
    const response = yield call(api.delete, `/comments/${commentId}`);

    yield put(
      CommentsActions.deleteCommentSuccess(
        normalize(response.data, comment),
        postId,
      ),
    );
  } catch (err) {
    yield put(
      CommentsActions.deleteCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}
