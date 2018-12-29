import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import { normalize } from 'normalizr';
import uuid from 'uuid';
import rootSaga from '../index';
import api from '../../../services/api';

import { Creators as PostsActions } from '../../ducks/posts';
import PostsTypes from '../../ducks/posts/types';
import { post } from '../../ducks/posts/schema';

const apiMock = new MockAdapter(api);

describe('Posts Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
    jest.setTimeout(30000);
  });

  it('should fetch posts from API', async () => {
    const category = 'all';
    const posts = [
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

    const response = posts;

    apiMock
      .onGet(category === 'all' ? '/posts' : `/${category}/posts`)
      .reply(200, response);

    sagaTester.dispatch(PostsActions.retrievePostsRequest(category));

    await sagaTester.waitFor(PostsTypes.RETRIEVE_POSTS_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.retrievePostsSuccess(normalize(posts, [post]), category),
    );
  });

  it('should handle error when fetching posts from API', async () => {
    const category = 'all';

    apiMock
      .onGet(category === 'all' ? '/posts' : `/${category}/posts`)
      .reply(400);

    sagaTester.dispatch(PostsActions.retrievePostsRequest(category));

    await sagaTester.waitFor(PostsTypes.RETRIEVE_POSTS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.retrievePostsError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  it('should fetch single post from API', async () => {
    const id = 'abc';
    const category = 'react';
    const postObj = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const response = postObj;

    apiMock.onGet(`/posts/${id}`).reply(200, response);

    sagaTester.dispatch(PostsActions.retrieveSinglePostRequest(id, category));

    await sagaTester.waitFor(PostsTypes.RETRIEVE_SINGLE_POST_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.retrieveSinglePostSuccess(
        normalize(postObj, post),
        category,
      ),
    );
  });

  it('should handle error when retrieving single post', async () => {
    const id = 'abc';
    const category = 'react';

    apiMock.onGet(`/posts/${id}`).reply(400);

    sagaTester.dispatch(PostsActions.retrieveSinglePostRequest(id, category));

    await sagaTester.waitFor(PostsTypes.RETRIEVE_SINGLE_POST_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.retrieveSinglePostError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  it('should be able to vote in a post', async () => {
    const postId = 'abc';
    const option = 'upVote';
    const postObj = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const response = postObj;

    apiMock.onPost(`/posts/${postId}`).reply(200, response);

    sagaTester.dispatch(PostsActions.voteInPostRequest(postId, option));

    await sagaTester.waitFor(PostsTypes.VOTE_IN_POST_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.voteInPostSuccess(normalize(postObj, post), postId),
    );
  });

  it('should handle error when voting in a post', async () => {
    const postId = 'abc';
    const option = 'upVote';

    apiMock.onPost(`/posts/${postId}`).reply(400);

    sagaTester.dispatch(PostsActions.voteInPostRequest(postId, option));

    await sagaTester.waitFor(PostsTypes.VOTE_IN_POST_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.voteInPostError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  it('should add a post', async () => {
    const title = 'abc';
    const author = 'Udacity';
    const body = 'blabla';
    const category = 'react';

    const postObj = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const response = postObj;

    apiMock
      .onPost('/posts', { title, author, body, category })
      .reply(200, response);

    sagaTester.dispatch(
      PostsActions.addPostRequest({ title, author, body, category }),
    );

    await sagaTester.waitFor(PostsTypes.ADD_POST_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.addPostSuccess(normalize(postObj, post), category),
    );
  });

  it('should handle error when adding a post', async () => {
    const title = 'abc';
    const author = 'Udacity';
    const body = 'blabla';
    const category = 'react';

    apiMock.onPost('/posts', { title, author, body, category }).reply(400);

    sagaTester.dispatch(
      PostsActions.addPostRequest({ title, author, body, category }),
    );

    await sagaTester.waitFor(PostsTypes.ADD_POST_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.addPostError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });

  it('should delete a post', async () => {
    const postId = 'abc';

    const postObj = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const response = postObj;

    apiMock.onDelete(`/posts/${postId}`).reply(200, response);

    sagaTester.dispatch(PostsActions.deletePostRequest(postId));

    await sagaTester.waitFor(PostsTypes.DELETE_POST_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.deletePostSuccess(normalize(postObj, post)),
    );
  });

  it('should handle error when deleting a post', async () => {
    const postId = 'abc';

    apiMock.onDelete(`/posts/${postId}`).reply(400);

    sagaTester.dispatch(PostsActions.deletePostRequest(postId));

    await sagaTester.waitFor(PostsTypes.DELETE_POST_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      PostsActions.deletePostError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  });
});
