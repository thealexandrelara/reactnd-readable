import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import EditComment from '../EditComment';
import Form from '../EditComment/Form';

describe('EditComment component', () => {
  it('should renders form as expected', () => {
    const postId = 'adfssb234';
    const commentId = 'adfssb234';
    const body = 'blabla';
    const editCommentRequest = () => ({});
    const handleCancel = () => ({});

    const wrapper = mount(
      <EditComment.WrappedComponent
        commentId={commentId}
        postId={postId}
        body={body}
        editCommentRequest={editCommentRequest}
        handleCancel={handleCancel}
      />,
    );

    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should calls form cancel', () => {
    const postId = 'adfssb234';
    const commentId = 'adfssb234';
    const body = 'blabla';
    const editCommentRequest = () => ({});
    const handleCancel = sinon.spy();

    const wrapper = mount(
      <EditComment.WrappedComponent
        commentId={commentId}
        postId={postId}
        body={body}
        editCommentRequest={editCommentRequest}
        handleCancel={handleCancel}
      />,
    );

    wrapper.instance().handleFormCancel();
    expect(handleCancel.calledOnce).toBe(true);
  });

  it('should handle form fields change', () => {
    const postId = 'adfssb234';
    const commentId = 'adfssb234';
    const body = 'blabla';
    const editCommentRequest = () => ({});
    const handleCancel = sinon.spy();

    const INITIAL_FIELDS_STATE = {
      body: {
        value: '',
      },
    };

    const wrapper = mount(
      <EditComment.WrappedComponent
        commentId={commentId}
        postId={postId}
        body={body}
        editCommentRequest={editCommentRequest}
        handleCancel={handleCancel}
      />,
    );

    wrapper.setState({ fields: INITIAL_FIELDS_STATE });
    wrapper.instance().handleFormChange({
      body: {
        value: 'hello',
      },
    });
    const visibleState = wrapper.state('fields');
    expect(visibleState).toEqual({
      body: {
        value: 'hello',
      },
    });
  });
});
