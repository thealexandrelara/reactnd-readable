import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../Categories';

describe('Categories component', () => {
  it('should renders as expected', () => {
    const wrapper = shallow(
      <Categories.WrappedComponent
        categories={[
          { path: 'react', name: 'react' },
          { path: 'redux', name: 'redux' },
          { path: 'udacity', name: 'udacity' },
        ]}
        currentCategory="all"
      />,
    );

    expect(wrapper.find('Link')).toHaveLength(4);
  });
});
