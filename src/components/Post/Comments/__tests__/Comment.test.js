import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Comment from '../Comment';

import {
  Message,
  AuthorName,
  Stats,
  Votes,
  EditClickable,
} from '../Comment/styles';
import DeletePopconfirm from '../Comment/DeletePopconfirm';

const mockStore = createMockStore();
const store = mockStore({});

describe('Comment component', () => {
  const comment = {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false,
  };

  it('should renders votes as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    expect(wrapper.find(Votes)).toHaveLength(1);
  });

  it('should renders author name as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    expect(wrapper.find(AuthorName)).toHaveLength(1);
  });

  it('should renders stats as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    expect(wrapper.find(Stats)).toHaveLength(1);
  });

  it('should renders edit clickable as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    expect(wrapper.find(EditClickable)).toHaveLength(1);
  });

  it('should renders delete pop confirm as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    expect(wrapper.find(DeletePopconfirm)).toHaveLength(1);
  });

  it('should renders message when in edit mode as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Provider store={store}>
        <Comment.WrappedComponent
          {...comment}
          voteInCommentRequest={voteInCommentRequest}
          deleteCommentRequest={deleteCommentRequest}
        />
      </Provider>,
    );
    wrapper.setState({ isEditing: true });

    expect(wrapper.find(Message)).toHaveLength(1);
  });

  it('should renders message when in edit mode as expected', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = mount(
      <Provider store={store}>
        <Comment.WrappedComponent
          {...comment}
          voteInCommentRequest={voteInCommentRequest}
          deleteCommentRequest={deleteCommentRequest}
        />
      </Provider>,
    );
    wrapper.setState({ isEditing: true });

    expect(wrapper.find(Message)).toHaveLength(1);
  });

  it('calls voteInCommentRequest when handle vote', () => {
    const voteInCommentRequest = sinon.spy();
    const deleteCommentRequest = sinon.spy();

    const wrapper = shallow(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    wrapper.instance().handleVote();

    expect(voteInCommentRequest.calledOnce).toBe(true);
  });

  it('calls deleteCommentRequest when handle vote', () => {
    const voteInCommentRequest = sinon.spy();
    const deleteCommentRequest = sinon.spy();

    const wrapper = shallow(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    wrapper.instance().handleDelete();

    expect(deleteCommentRequest.calledOnce).toBe(true);
  });

  it('should handle edit', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = shallow(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    wrapper.setState({ isEditing: false });
    wrapper.instance().handleEdit();
    const isEditingState = wrapper.state('isEditing');
    expect(isEditingState).toEqual(true);
  });

  it('should handle cancel edit', () => {
    const voteInCommentRequest = () => ({});
    const deleteCommentRequest = () => ({});

    const wrapper = shallow(
      <Comment.WrappedComponent
        {...comment}
        voteInCommentRequest={voteInCommentRequest}
        deleteCommentRequest={deleteCommentRequest}
      />,
    );

    wrapper.setState({ isEditing: true });
    wrapper.instance().handleEditCancel();
    const isEditingState = wrapper.state('isEditing');
    expect(isEditingState).toEqual(false);
  });
});
