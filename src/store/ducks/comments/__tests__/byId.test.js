import { normalize } from 'normalizr';
import reducer from '../reducers/byId';
import { Creators as CommentsActions } from '../index';
import { comment } from '../schema';

const INITIAL_STATE = {};

describe('Comments byId reducer', () => {
  it('should be able to fetch comments', () => {
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.retrieveCommentsSuccess(normalize(comments, [comment])),
    );

    expect(state).toEqual(normalize(comments, [comment]).entities.comments);
  });

  it('should be able to retrieve single comment', () => {
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.retrieveSingleCommentSuccess(
        normalize(commentObj, comment),
      ),
    );

    expect(state).toEqual(normalize(commentObj, comment).entities.comments);
  });

  it('should be able to handle error when retrieving single comment', () => {
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.retrieveSingleCommentError('error'),
    );

    expect(state).toEqual(INITIAL_STATE);
  });

  it('should be able to vote in a comment', () => {
    const commentId = 'abc';
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.voteInCommentSuccess(
        normalize(commentObj, comment),
        commentId,
      ),
    );

    expect(state).toEqual(normalize(commentObj, comment).entities.comments);
  });

  it('should be able to handle error when voting in comment', () => {
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.voteInCommentError('error'),
    );

    expect(state).toEqual(INITIAL_STATE);
  });

  it('should be able to add comment', () => {
    const postId = 'abc';
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.addCommentSuccess(normalize(commentObj, comment), postId),
    );

    expect(state).toEqual(normalize(commentObj, comment).entities.comments);
  });

  it('should be able to handle error when adding a comment', () => {
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

    const state = reducer(
      INITIAL_STATE,
      CommentsActions.addCommentError('error'),
    );

    expect(state).toEqual(INITIAL_STATE);
  });
});
