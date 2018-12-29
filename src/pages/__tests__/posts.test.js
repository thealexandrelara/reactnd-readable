import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, loadingStore } from '../../tests/data';
import Posts from '../posts';
import Loading from '../../components/Loading';
import PostsList from '../../components/PostsList';

describe('posts component', () => {
  it('should renders Categories as expected', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/react']}>
        <Provider store={loadingStore}>
          <Route path="/:categoryId" component={() => <Posts />} />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(Loading)).toHaveLength(1);
  });

  it('should renders Posts ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/react']}>
        <Provider store={store}>
          <Route path="/:categoryId" component={() => <Posts />} />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(PostsList)).toHaveLength(1);
  });
});
