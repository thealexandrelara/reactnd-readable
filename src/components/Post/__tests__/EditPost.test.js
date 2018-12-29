import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import EditPost from '../EditPost';
import Form from '../EditPost/Form';

const INITIAL_FIELDS_STATE = {
  title: {
    value: '',
  },
  body: {
    value: '',
  },
};

describe('EditPost component', () => {
  it('should renders form as expected', () => {
    const postId = 'adfssb234';
    const title = 'hey';
    const body = 'blabla';
    const editPostRequest = () => ({});
    const handleEdit = () => ({});

    const wrapper = mount(
      <EditPost.WrappedComponent
        title={title}
        body={body}
        postId={postId}
        editPostRequest={editPostRequest}
        handleEdit={handleEdit}
      />,
    );

    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should calls form cancel', () => {
    const postId = 'adfssb234';
    const title = 'hey';
    const body = 'blabla';
    const editPostRequest = sinon.spy();
    const handleEdit = sinon.spy();

    const wrapper = shallow(
      <EditPost.WrappedComponent
        title={title}
        body={body}
        postId={postId}
        editPostRequest={editPostRequest}
        handleEdit={handleEdit}
      />,
    );

    wrapper.instance().handleFormCancel();
    expect(handleEdit.calledOnce).toBe(true);
  });

  it('should handle form fields change', () => {
    const postId = 'adfssb234';
    const title = 'hey';
    const body = 'blabla';
    const editPostRequest = sinon.spy();
    const handleEdit = sinon.spy();

    const wrapper = shallow(
      <EditPost.WrappedComponent
        title={title}
        body={body}
        postId={postId}
        editPostRequest={editPostRequest}
        handleEdit={handleEdit}
      />,
    );

    wrapper.setState({ fields: INITIAL_FIELDS_STATE });
    wrapper.instance().handleFormChange({
      title: {
        value: 'hello',
      },
    });
    const visibleState = wrapper.state('fields');
    expect(visibleState).toEqual({
      body: {
        value: '',
      },
      title: {
        value: 'hello',
      },
    });
  });
});
