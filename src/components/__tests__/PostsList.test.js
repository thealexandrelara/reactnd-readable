import React from 'react';
import { mount } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import PostsList from '../PostsList';
import List from '../PostsList/List';
import Filters from '../PostsList/Filters';
import Empty from '../Empty';

const mockStore = createMockStore();
const store = mockStore({});

describe('PostsList component', () => {
  const posts = [
    {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false,
      commentCount: 2,
    },
  ];

  it('should renders filters as expected', () => {
    const retrievePostsRequest = () => ({});
    const handleFilterChange = () => ({});
    const handleSearchInputChange = () => ({});
    const category = 'react';
    const searchTerm = '';

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <PostsList.WrappedComponent
            posts={posts}
            retrievePostsRequest={retrievePostsRequest}
            handleFilterChange={handleFilterChange}
            handleSearchInputChange={handleSearchInputChange}
            category={category}
            searchTerm={searchTerm}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(Filters)).toHaveLength(1);
  });

  it('should renders List as expected', () => {
    const retrievePostsRequest = () => ({});
    const handleFilterChange = () => ({});
    const handleSearchInputChange = () => ({});
    const category = 'react';
    const searchTerm = '';

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <PostsList.WrappedComponent
            posts={posts}
            retrievePostsRequest={retrievePostsRequest}
            handleFilterChange={handleFilterChange}
            handleSearchInputChange={handleSearchInputChange}
            category={category}
            searchTerm={searchTerm}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(List)).toHaveLength(1);
  });

  it('should renders List as expected', () => {
    const emptyPosts = [];
    const retrievePostsRequest = () => ({});
    const handleFilterChange = () => ({});
    const handleSearchInputChange = () => ({});
    const category = 'react';
    const searchTerm = '';

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <PostsList.WrappedComponent
            posts={emptyPosts}
            retrievePostsRequest={retrievePostsRequest}
            handleFilterChange={handleFilterChange}
            handleSearchInputChange={handleSearchInputChange}
            category={category}
            searchTerm={searchTerm}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(Empty)).toHaveLength(1);
  });
});
