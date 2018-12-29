import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, loadingStore } from '../../tests/data';
import PostDetail from '../postDetail';
import Loading from '../../components/Loading';
import Post from '../../components/Post';
import NotFound from '../../components/404NotFound';

const retrieveSinglePostRequest = () => ({});
const retrieveCommentsRequest = () => ({});
const props = {
  retrieveSinglePostRequest,
  retrieveCommentsRequest,
};

describe('postDetail component', () => {
  it('should renders Categories as expected', () => {
    const newProps = { ...props, loadingCategories: true };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/react/8xf0y6ziyjabvozdd253nd']}>
        <Provider store={loadingStore}>
          <Route
            path="/:categoryId/:postId"
            component={() => <PostDetail {...newProps} />}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(Loading)).toHaveLength(1);
  });

  it('should not renders Post when is comment', () => {
    const newProps = { ...props, loadingCategories: true };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/react/8xf0y6ziyjabvozdd253nd']}>
        <Provider store={store}>
          <Route
            path="/:categoryId/:postId"
            component={() => <PostDetail {...newProps} />}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(Post)).toHaveLength(1);
  });

  it('should not renders Post when is comment', () => {
    const newProps = { ...props, loadingCategories: true };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/react/8xasfdf0y6ziyjabvozdd253nd']}>
        <Provider store={store}>
          <Route
            path="/:categoryId/:postId"
            component={() => <PostDetail {...newProps} />}
          />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
