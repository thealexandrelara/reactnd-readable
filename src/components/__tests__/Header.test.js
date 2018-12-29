import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
  it('should renders home link as expected', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('Link')).toHaveLength(1);
  });
});
