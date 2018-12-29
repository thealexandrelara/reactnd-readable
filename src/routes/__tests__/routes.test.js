import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { Route, MemoryRouter } from 'react-router-dom';
import createMockStore from 'redux-mock-store';
import Routes from '../routes';

const mockStore = createMockStore();
const store = mockStore({});

describe('routes component', () => {
  it('should render Routes', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper.find(Route)).toHaveLength(3);
  });
});
