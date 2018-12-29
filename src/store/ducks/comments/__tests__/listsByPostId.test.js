import { normalize } from 'normalizr';
import reducer from '../reducers/listsByPostId';
import { Creators as CommentsActions } from '../index';
import { comment } from '../schema';

const INITIAL_STATE = {};

describe('Comments listByPostId reducer', () => {
  it('should be able to fetch comments', () => {
    const postId = 'abc';
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
      CommentsActions.retrieveCommentsSuccess(
        normalize(comments, [comment]),
        postId,
      ),
    );

    expect(state.ids).toEqual({
      [postId]: normalize(comments, [comment]).result,
    });
  });
});
