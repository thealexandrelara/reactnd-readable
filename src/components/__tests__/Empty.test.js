import React from 'react';
import { shallow } from 'enzyme';
import Empty from '../Empty';

describe('Empty component', () => {
  it('should renders as expected', () => {
    const wrapper = shallow(<Empty />);

    expect(wrapper.find('p')).toHaveLength(1);
  });
});
