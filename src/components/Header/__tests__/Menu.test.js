import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from '../Menu';
import { Menu } from '../Menu/styles';

describe('Menu component', () => {
  it('should renders as expected', () => {
    const wrapper = shallow(<NavMenu />);

    expect(wrapper.find(Menu)).toHaveLength(1);
  });

  it('should handle click', () => {
    const wrapper = shallow(<NavMenu />);

    wrapper.setState({
      current: 'react',
    });
    wrapper.instance().handleClick({
      key: 'udacity',
    });
    const visibleState = wrapper.state('current');
    expect(visibleState).toEqual('udacity');
  });
});
