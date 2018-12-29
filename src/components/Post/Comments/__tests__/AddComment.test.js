import React from 'react';
import { mount } from 'enzyme';
import AddComment from '../AddComment';
import Form from '../AddComment/Form';

const INITIAL_FIELDS_STATE = {
  author: {
    value: 'Udacity',
  },
  body: {
    value: '',
  },
};

describe('AddComment component', () => {
  it('should renders form as expected', () => {
    const postId = 'adfssb234';
    const addCommentRequest = () => ({});

    const wrapper = mount(
      <AddComment.WrappedComponent
        postId={postId}
        addCommentRequest={addCommentRequest}
      />,
    );

    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should handle form fields change', () => {
    const postId = 'adfssb234';
    const addCommentRequest = () => ({});

    const wrapper = mount(
      <AddComment.WrappedComponent
        postId={postId}
        addCommentRequest={addCommentRequest}
      />,
    );

    wrapper.setState({ fields: INITIAL_FIELDS_STATE });
    wrapper.instance().handleFormChange({
      author: {
        value: 'Udacity',
      },
      body: {
        value: 'ASDFASD',
      },
    });
    const visibleState = wrapper.state('fields');
    expect(visibleState).toEqual({
      author: {
        value: 'Udacity',
      },
      body: {
        value: 'ASDFASD',
      },
    });
  });
});
