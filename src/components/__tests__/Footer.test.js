import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer component', () => {
  it('should renders as expected', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('span')).toHaveLength(1);
  });
});
