import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../404NotFound';

describe('Footer component', () => {
  it('should renders as expected', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('p')).toHaveLength(1);
  });
});
