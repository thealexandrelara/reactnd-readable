import React from 'react';
import { mount } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Comments from '../Comments';
import AddComment from '../Comments/AddComment';
import Comment from '../Comments/Comment';

const mockStore = createMockStore();
const store = mockStore({});

describe('Comments component', () => {
  const comments = [
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
  ];

  it('should renders add comment as expected', () => {
    const postId = 'abc123';

    const wrapper = mount(
      <Provider store={store}>
        <Comments comments={comments} postId={postId} />
      </Provider>,
    );

    expect(wrapper.find(AddComment)).toHaveLength(1);
  });

  it('should renders comments as expected', () => {
    const postId = 'abc123';

    const wrapper = mount(
      <Provider store={store}>
        <Comments comments={comments} postId={postId} />
      </Provider>,
    );
    expect(wrapper.find(Comment)).toHaveLength(2);
  });
});
