import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import { normalize } from 'normalizr';
import uuid from 'uuid';
import rootSaga from '../index';
import api from '../../../services/api';

import { Creators as CommentsActions } from '../../ducks/comments';
import CommentsTypes from '../../ducks/comments/types';
import { comment } from '../../ducks/comments/schema';

const apiMock = new MockAdapter(api);

describe('Comments Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should fetch comments from API', async () => {
    const postId = '232fasdfas';
    const comments = [
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
    ];

    const response = comments;

    apiMock.onGet(`/posts/${postId}/comments`).reply(200, response);

    sagaTester.dispatch(CommentsActions.retrieveCommentsRequest(postId));

    await sagaTester.waitFor(CommentsTypes.RETRIEVE_COMMENTS_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.retrieveCommentsSuccess(
        normalize(comments, [comment]),
        postId,
      ),
    );
  });

  it('should handle error when fetching comments from API', async () => {
    const postId = '232fasdfas';

    apiMock.onGet(`/posts/${postId}/comments`).reply(400);

    sagaTester.dispatch(CommentsActions.retrieveCommentsRequest(postId));

    await sagaTester.waitFor(CommentsTypes.RETRIEVE_COMMENTS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.retrieveCommentsError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  it('should vote in a comment', async () => {
    const commentId = '232fasdfas';
    const option = 'upVote';

    const commentObj = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const response = commentObj;

    apiMock.onPost(`/comments/${commentId}`, { option }).reply(200, response);

    sagaTester.dispatch(
      CommentsActions.voteInCommentRequest(commentId, option),
    );

    await sagaTester.waitFor(CommentsTypes.VOTE_IN_COMMENT_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.voteInCommentSuccess(
        normalize(commentObj, comment),
        commentId,
      ),
    );
  });

  it('should handle error when voting in a comment', async () => {
    const commentId = '232fasdfas';
    const option = 'upVote';

    apiMock.onPost(`/comments/${commentId}`, { option }).reply(400);

    sagaTester.dispatch(
      CommentsActions.voteInCommentRequest(commentId, option),
    );

    await sagaTester.waitFor(CommentsTypes.VOTE_IN_COMMENT_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.voteInCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  // it('should edit comment', async () => {
  //   const commentId = 'Udacity';
  //   const body = 'Testing';
  //   const postId = '123fasdf';

  //   const params = {
  //     body,
  //     timestamp: Date.now(),
  //   };

  //   const commentObj = {
  //     id: '8tu4bsun805n8un48ve89',
  //     parentId: '8xf0y6ziyjabvozdd253nd',
  //     timestamp: 1469479767190,
  //     body: 'Comments. Are. Cool.',
  //     author: 'thingone',
  //     voteScore: -5,
  //     deleted: false,
  //     parentDeleted: false,
  //   };

  //   const response = commentObj;

  //   apiMock.onPut(`/comments/${commentId}`, { ...params }).reply(200, response);

  //   sagaTester.dispatch(
  //     CommentsActions.editCommentRequest({ body }, commentId, postId),
  //   );

  //   await sagaTester.waitFor(CommentsTypes.EDIT_COMMENT_SUCCESS);

  //   expect(sagaTester.getLatestCalledAction()).toEqual(
  //     CommentsActions.editCommentSuccess(
  //       normalize(commentObj, comment),
  //       postId,
  //     ),
  //   );
  // });

  it('should handle error when editing a comment', async () => {
    const commentId = 'Udacity';
    const body = 'Testing';
    const postId = '123fasdf';

    const params = {
      body,
      timestamp: Date.now(),
    };

    apiMock.onPut(`/comments/${commentId}`, { ...params }).reply(400);

    sagaTester.dispatch(
      CommentsActions.editCommentRequest({ body }, commentId, postId),
    );

    await sagaTester.waitFor(CommentsTypes.EDIT_COMMENT_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.editCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  it('should delete comment', async () => {
    const commentId = 'Udacity';
    const postId = '123fasdf';

    const commentObj = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const response = commentObj;

    apiMock.onDelete(`/comments/${commentId}`).reply(200, response);

    sagaTester.dispatch(
      CommentsActions.deleteCommentRequest(commentId, postId),
    );

    await sagaTester.waitFor(CommentsTypes.DELETE_COMMENT_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.deleteCommentSuccess(
        normalize(commentObj, comment),
        postId,
      ),
    );
  });

  it('should handle error when deleting a comment', async () => {
    const commentId = 'Udacity';
    const postId = '123fasdf';

    apiMock.onDelete(`/comments/${commentId}`).reply(400);

    sagaTester.dispatch(
      CommentsActions.deleteCommentRequest(commentId, postId),
    );

    await sagaTester.waitFor(CommentsTypes.DELETE_COMMENT_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CommentsActions.deleteCommentError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });
});
