import React from 'react';
import { mount, shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import Post from '../Post';

import { AuthorName, Votes } from '../Post/styles';

import reactCategoryThumbnail from '../../assets/images/react-category-transparent.png';
import reduxCategoryThumbnail from '../../assets/images/redux-category-transparent.png';
import udacityCategoryThumbnail from '../../assets/images/udacity-category-transparent.png';

const mockStore = createMockStore();
const store = mockStore({});

describe('Post component', () => {
  const post = {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2,
  };

  it('should renders votes as expected', () => {
    const isSingle = false;
    const voteInPostRequest = () => ({});
    const deletePostRequest = () => ({});

    const wrapper = mount(
      <MemoryRouter>
        <Post.WrappedComponent
          {...post}
          voteInPostRequest={voteInPostRequest}
          deletePostRequest={deletePostRequest}
          isSingle={isSingle}
        />
      </MemoryRouter>,
    );

    expect(wrapper.find(Votes)).toHaveLength(1);
  });

  it('should renders author name as expected', () => {
    const isSingle = false;
    const voteInPostRequest = () => ({});
    const deletePostRequest = () => ({});

    const wrapper = mount(
      <MemoryRouter>
        <Post.WrappedComponent
          {...post}
          voteInPostRequest={voteInPostRequest}
          deletePostRequest={deletePostRequest}
          isSingle={isSingle}
        />
      </MemoryRouter>,
    );

    expect(wrapper.find(AuthorName)).toHaveLength(1);
  });

  it('calls voteInPostRequest when handle vote', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const wrapper = shallow(
      <Post.WrappedComponent
        {...post}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    // find the first div and simulate a click event on it
    wrapper.instance().handleVote();

    // ensure that our spy (toggleForecast) was called when click was simulated
    expect(voteInPostRequest.calledOnce).toBe(true);
  });

  it('calls deletePostRequest when handle vote', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const wrapper = shallow(
      <Post.WrappedComponent
        {...post}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    wrapper.instance().handleDelete();

    expect(deletePostRequest.calledOnce).toBe(true);
  });

  it('should handle edit', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const wrapper = shallow(
      <Post.WrappedComponent
        {...post}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    wrapper.setState({ isEditing: false });
    wrapper.instance().handleEdit('edit');
    const isEditingState = wrapper.state('isEditing');
    expect(isEditingState).toEqual(true);
  });

  it('should handle cancel edit', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const wrapper = shallow(
      <Post.WrappedComponent
        {...post}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    wrapper.setState({ isEditing: true });
    wrapper.instance().handleEdit('cancel');
    const isEditingState = wrapper.state('isEditing');
    expect(isEditingState).toEqual(false);
  });

  it('should get redux category thumbnail', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const newProps = { ...post, category: 'redux' };

    const wrapper = shallow(
      <Post.WrappedComponent
        {...newProps}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    const categoryThumbnail = wrapper.instance().getThumbnail();
    expect(categoryThumbnail).toEqual(reduxCategoryThumbnail);
  });

  it('should get udacity category thumbnail', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const newProps = { ...post, category: 'udacity' };

    const wrapper = shallow(
      <Post.WrappedComponent
        {...newProps}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    const categoryThumbnail = wrapper.instance().getThumbnail();
    expect(categoryThumbnail).toEqual(udacityCategoryThumbnail);
  });

  it('should get default category thumbnail', () => {
    const isSingle = false;
    const voteInPostRequest = sinon.spy();
    const deletePostRequest = sinon.spy();

    const newProps = { ...post, category: '' };

    const wrapper = shallow(
      <Post.WrappedComponent
        {...newProps}
        voteInPostRequest={voteInPostRequest}
        deletePostRequest={deletePostRequest}
        isSingle={isSingle}
      />,
    );

    const categoryThumbnail = wrapper.instance().getThumbnail();
    expect(categoryThumbnail).toEqual(udacityCategoryThumbnail);
  });
});
