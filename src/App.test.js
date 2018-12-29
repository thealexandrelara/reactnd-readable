import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Content } from './styles/components';

describe('routes component', () => {
  it('should render App', () => {
    const retrieveCategoriesRequest = () => ({});

    const wrapper = shallow(
      <App.WrappedComponent
        retrieveCategoriesRequest={retrieveCategoriesRequest}
      />,
    );

    expect(wrapper.find(Content)).toHaveLength(1);
  });
});
