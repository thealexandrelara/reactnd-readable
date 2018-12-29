import React from 'react';
import { mount } from 'enzyme';
import AddPost from '../AddPost';
import Form from '../AddPost/Form';

const INITIAL_FIELDS_STATE = {
  title: {
    value: '',
  },
  author: {
    value: '',
  },
  body: {
    value: '',
  },
  category: {
    value: '',
  },
};

describe('AddPost component', () => {
  it('should renders form as expected', () => {
    const categories = [{ path: 'react', name: 'react' }];
    const addPostRequest = () => ({});

    const wrapper = mount(
      <AddPost.WrappedComponent
        categories={categories}
        addPostRequest={addPostRequest}
      />,
    );

    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should show modal as expected', () => {
    const categories = [{ path: 'react', name: 'react' }];
    const addPostRequest = () => ({});

    const wrapper = mount(
      <AddPost.WrappedComponent
        categories={categories}
        addPostRequest={addPostRequest}
      />,
    );
    wrapper.setState({ visible: false });
    wrapper.instance().showModal();
    const visibleState = wrapper.state('visible');
    expect(visibleState).toEqual(true);
  });

  it('should hide modal as expected', () => {
    const categories = [{ path: 'react', name: 'react' }];
    const addPostRequest = () => ({});

    const wrapper = mount(
      <AddPost.WrappedComponent
        categories={categories}
        addPostRequest={addPostRequest}
      />,
    );
    wrapper.setState({ visible: true });
    wrapper.instance().hideModal();
    const visibleState = wrapper.state('visible');
    expect(visibleState).toEqual(false);
  });

  it('should reset values', () => {
    const categories = [{ path: 'react', name: 'react' }];
    const addPostRequest = () => ({});

    const wrapper = mount(
      <AddPost.WrappedComponent
        categories={categories}
        addPostRequest={addPostRequest}
      />,
    );
    wrapper.setState({
      fields: {
        title: {
          value: 'hello',
        },
        author: {
          value: 'hi',
        },
        body: {
          value: 'hey',
        },
        category: {
          value: 'okay',
        },
      },
    });
    wrapper.instance().resetValues();
    const fieldsState = wrapper.state('fields');
    expect(fieldsState).toEqual(INITIAL_FIELDS_STATE);
  });

  it('should handle cancel', () => {
    const categories = [{ path: 'react', name: 'react' }];
    const addPostRequest = () => ({});

    const wrapper = mount(
      <AddPost.WrappedComponent
        categories={categories}
        addPostRequest={addPostRequest}
      />,
    );
    wrapper.setState({
      fields: {
        title: {
          value: 'hello',
        },
        author: {
          value: 'hi',
        },
        body: {
          value: 'hey',
        },
        category: {
          value: 'okay',
        },
      },
    });
    wrapper.instance().handleCancel();
    const fieldsState = wrapper.state('fields');
    expect(fieldsState).toEqual(INITIAL_FIELDS_STATE);
  });

  it('should handle form change as expected', () => {
    const categories = [{ path: 'react', name: 'react' }];
    const addPostRequest = () => ({});

    const wrapper = mount(
      <AddPost.WrappedComponent
        categories={categories}
        addPostRequest={addPostRequest}
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
      author: {
        value: '',
      },
      body: {
        value: '',
      },
      category: {
        value: '',
      },
      title: {
        value: 'hello',
      },
    });
  });
});
